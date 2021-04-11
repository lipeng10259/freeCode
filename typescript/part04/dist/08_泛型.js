"use strict";
/**
 * 在定义函数或类时，如果遇到类型不明确就可以使用泛型
 *
 *
*/
function fn(a) {
    return a;
}
// 可以直接使用具有泛型的函数
let result = fn(10); // 不指定泛型，ts 可以自动对类型进行推断
let result2 = fn('hello'); // 指定泛型
function fn2(a, b) {
    return a;
}
console.log(fn2(123, 'hello'));
function fn3(a) {
    return a.length;
}
console.log(fn3({ length: 10 }));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('hello');
