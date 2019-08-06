let bool = false

const p1 = new Promise(function (resolve , reject) {

    if(bool) {

        resolve('成功！');

    } else {

        reject('失败！');

    }

})

const p2 = new Promise(function (resolve , reject) {

    resolve(p1)

})

p2.then(
    function (result) {

        console.log(result+'1')

    },
    function (error) {

        console.log(error+'0')

    }
)

// p2的值，取决于 p1的返回结果 
// 如果p1 是false p2 打印出来的是 失败
// 如果p1 是true  p2打印出来的是 成功