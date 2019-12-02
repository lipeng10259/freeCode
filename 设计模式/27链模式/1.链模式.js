// 链模式： 通过在对象方法中将当前对象返回，实现对同一个对象的多个方法的链式调用。从而简化对该对象的多个方法的多次调用时，对该对象的多次调用。


var A = function (selector) {
    return A.fn.init(selector)
} 

A.fn = A.prototype = {
    init : function (selector) {
        return document.getElementById(selector)
    },
    length : 2,
    size : function () {
        return this.length;
    }
}

console.log(A('demo'));

// A对象返回的 结果无法拥有 A.fn 中的方法