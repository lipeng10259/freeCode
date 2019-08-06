var bool = true;
const promise = new Promise(function (resolve , reject){

    if (bool) {
        resolve('成功！')
    } else {
        reject("失败！")
    }
})
promise.then(
    (value) => {
        console.log(value)
    },
    (value)=>{
        console.log(value)
    }
)