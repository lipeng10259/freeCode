// 链模式： 通过在对象方法中将当前对象返回，实现对同一个对象的多个方法的链式调用。从而简化对该对象的多个方法的多次调用时，对该对象的多次调用。


function A (selector) {
    return new A.fn.init(selector)
} 

A.fn = A.prototype = {
    constructor:A,
    init : function (selector) {
        this[0] = document.getElementById(selector);// 作为但钱对象的属性值保存
        this.length = 1; // 校正length 属性
        console.log(this === A.fn , this === A.prototype , this)
        return this;
    },
    length : 2,
    size : function () {
        return this.length;
    }
};


A.fn.init.prototype = A.fn

    let demo = A('demo');
    console.log(demo.size())




// console.log(demo.size())

// let test = A('test');

// console.dir(demo)

//0: div#test  init: ƒ (selector)length: 1size: ƒ ()__proto__: Object