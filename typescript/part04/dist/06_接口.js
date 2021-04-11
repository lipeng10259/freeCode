"use strict";
(function () {
    const obj = {
        name: 'xiao li',
        age: 12
    };
    const obj1 = {
        name: 'ss',
        age: 12,
        gender: '男'
    };
    /**
     * 定义类时，可以使用类去实现一个接口，
     * 实际接口就是实用类满足接口的要求
     *
     *
    */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好！');
        }
    }
})();
