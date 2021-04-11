"use strict";
class Person {
    constructor() {
        // 定义属性 直接定义的属性是实例属性，需要通过对象的实例去访问
        this.name = '猴哥';
        this.age = 16;
        // readonly  属性只读，无法修改
        this.like = 'sing';
        // 方法前面加static 则是类的方法，可以直接通过类去调用
    }
    // 定义方法  
    sayHello() {
        console.log(this.name + '你好！');
    }
}
// 在属性前面使用static 关键字可以定义类属性(静态属性)
Person.sex = 'nan';
const person = new Person();
console.log(person, person.name);
person.sayHello();
// person.like = 'speak'
