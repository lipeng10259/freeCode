
    // BH 命名空间

    var BH = {};


    
    
    BH.Interface = function (name, methods) {
        // 判断接口的参数个数 
        if(arguments.length != 2){
            throw new Error('this instance interface constructor arguments must be 2 length')
        }
        this.name = name;
        
        this.methods = [];// 定义一个内置的空数组对象 等待接受methods里面的元素（方法名字）

        for (var i = 0,len = methods.length ; i < len ; i++ ){

                if(typeof methods[i] !== 'string'){

                    throw new Error('the Interface method name is error')
                }

                this.methods.push(methods[i])

        }


        }

    // 三 ： 检验接口里面的方法
    // 如果检验通过 不做任何操作 不通过: 浏览器抛出error
    BH.Interface.ensureImplements = function (object) {
        if(arguments.length < 2) {
            throw new Error('Interface.ensureImplements method contructor arguments must be >=2')
        }

        // 获得接口实例对象
        for(var i = 1, len = arguments.length ; i < len ; i++){

            var instanceInterface = arguments[i];

            // 判断参数是否是接口的类型
            if(instanceInterface.constructor !==  BH.Interface){
                throw new ('the arguments constructor not be Interface Class')
            }
            // 循环接口实例对象里面的每一个方法
            for(var j = 0 ; j < instanceInterface.methods.length ; j++) {
                // 用一个临时变量 接受每一个方法的名字（注意是字符串）
                var methodName = instanceInterface.methods[j]

                if(!object[methodName] || typeof object[methodName] !== 'function'){
                    throw new Error('the method "' + methodName + '" is not found')
                }

            }
        }
    }

    BH.extend = function (sub , sup){
        // sub传入的子类 sup 传入的父类
        // 目的: 实现继承父类的原型对象
        

        var F = new Function ();//1. 创建一个空函数 目的: 空函数继承中转

        F.prototype = sup.prototype // 2.实现空函数的原型对象和超类的原型对象转换

        sub.prototype = new F() //3. 实现原型继承

        sub.prototype.constructor = sub;//4. 还原子类的构造器

        // 保存一下父类的原型对象： 一方面方便解耦 另一方面获得父类的原型对象          
        
        sub.superClass  = sup.prototype// 自定义一个子类的静态属性 接收父类的原型对象

        // 判断父类的原型对象的构造器
        
        if(sup.prototype.constructor == Object.prototype.constructor){
            sup.prototype.constructor = sup
        }

    }


    BH.EventUtil = {
        addHandler : function (element , type , handler) {
            if (element.addEventListener){
                element.addEventListener(type , handler , false)
            }else if(element.attachEvent){
                element.attachEvent('on' + type , handler)
            }
        },
        removeHandler : function (element , type , handler) {
            if (element.removeEventListener){
                element.removeEventListener(type , handler , false)
            }else if(element.detachEvent){
                element.detachEvent('on' + type , handler)
            }
        },


    }
