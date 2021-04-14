(function(){

    // 定义一个人的类

    class Person {
        // ts可以在属性的前面添加属性的修饰符
        /**
         * public 修饰符的属性可以在任何位置访问和修改 默认值
         * private 私有属性，私有属性只能在类的内部进行访问和修改
         *          通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中访问和修改
         * 
         * 
        */

        private _name:string
        private _age:number

        constructor (name:string,age:number) {
            this._name = name
            this._age = age
        }

        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *         它们被称为属性的存取器
         * 
         * 
        */

        // ts 的getter 方法
        get name () {
            return this._name
        }
        // ts 的setter 方法
        set name (name:string) {
            this._name = name   
        }

        get age () {
            return this._age
        }
        set age (age:number) {
            if(age >= 0) {
               this._age = age 
            }  
        }

    }

    const per  = new Person('猴哥',12)
    
    console.log(per.name)

    console.log(per.age = 13)
    console.log(per.age) 

    class A {
        protected num:number
        constructor(num:number){
            this.num = num
        }
    }

    class B extends A {
        test () {
            console.log(this.num)
        }
    }

    const A1 = new B(1232)

    // A1.num  无法访问num

 class C {
     constructor(public name:string,public age:number){

     }
 }

 const c = new C('li',12)

 console.log(c);
 

})()