// 单例模式：又称为单体模式，是在语序实例化一次的对象类。有时我们也用一个对象来规划一个命名空间，井井有条的管理对象上的属性和方法。

function g (id) {

    return document.getElementById(id);

}

function css (id , key , value) {
     
    g(id).style[key] = value;
 
}

function attr (id , key , value) {

    g(id)[key] = value;

}

function html (id , value) {

    g(id).innerHTML = value;

}

function on (id , type , fn) {

    g(id)['on'+type] = fn;
        
}


var lp = {
     g(id) {

        return document.getElementById(id);
    
    },
    css (id , key , value) {
         
        this.g(id).style[key] = value;
     
    },
    attr(id , key , value) {
    
        this.g(id)[key] = value;
    
    },
    html (id , value) {
    
        this.g(id).innerHTML = value;
    
    },
    on (id , type , fn) {
    
        this.g(id)['on'+type] = fn;
            
    }
}

// 小程代码库

var A = {
    Util : {
        util_method1 : function () {},
        util_method1 : function () {}
    },
    Tool : {
        tool_method1 : function () {},
        tool_method1 : function () {}
    }
}

// 无法改变的静态变量

var Conf = (function () {
    //私有变量
    var conf = {
        MAX_NUM : 100,
        MIN_NUM : 1,
        COUNT : 1000
    }
    // 返回取值器对象

    return {
        // 取值器方法
        get : function (name) {
            return conf[name] ? conf[name] : null
        }
    }

})();
var count  = Conf.get('COUNT');

// 惰性单例

var LazySingle = (function () {
    // 单例实例引用
    var _instance = null;
    // 单例
    function  Single () {
        /*这里定义私有属性和方法*/
        return {
            pulicMethod : function (){},
            publicProperty : '1.0'
        }

    }
    // 获取单例对象接口

    return function () {
        if(!_instance) {
            _instance = Single()
        }
        // 返回单例
        return _instance;
    }

})()