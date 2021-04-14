"use strict";
(function () {
    // 定义一个人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *         它们被称为属性的存取器
         *
         *
        */
        // ts 的getter 方法
        get name() {
            return this._name;
        }
        // ts 的setter 方法
        set name(name) {
            this._name = name;
        }
        get age() {
            return this._age;
        }
        set age(age) {
            if (age >= 0) {
                this._age = age;
            }
        }
    }
    const per = new Person('猴哥', 12);
    console.log(per.name);
    console.log(per.age = 13);
    console.log(per.age);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const A1 = new B(1232);
    // A1.num  无法访问num
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('li', 12);
    console.log(c);
})();
