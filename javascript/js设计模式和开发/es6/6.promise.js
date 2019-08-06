
const p1 = new Promise(function (resolve , reject) {

    setTimeout(()=> reject(new Error ('err fail')),3000)

})

const p2 = new  Promise(function (resolve , reject) {

    setTimeout(()=> resolve(p1), 1000)

})

p2.then(result => {console.log(result)}).catch(error => console.log(error+'失败'));

// p2 的状态取决于 p1 的状态 
// 所以 p2的延迟无效 
// 3秒之后 p1状态改变 ， p2 触发 catch 回调