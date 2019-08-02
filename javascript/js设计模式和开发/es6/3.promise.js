let promise = new Promise(function ( resoleve , reject ) {

    console.log('promise')

    resoleve();

})

promise.then(function () {

    console.log('resolved. ');

})

console.log('Hi');

// 执行顺序是 1，promise  2，Hi  3，resolved. 
// then 方法指定的回调函数式在当前脚本所有同步任务执行完之后才会执行