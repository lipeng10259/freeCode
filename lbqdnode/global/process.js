
// process 对象，相当于浏览器环境中的 window 对象，他是node 的全局对象

console.log(1)
process.nextTick(()=>{ // nextTick ：将一个函数的执行时间规划到下一个事件循环中
    console.log(2)
});
console.log(3)

// 1
// 3
// 2