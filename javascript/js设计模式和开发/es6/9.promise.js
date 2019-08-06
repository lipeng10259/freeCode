var bool = true;
var bool2 = true;
var bool3 = true;

var p1 = new Promise(function(resolve,reject){

    if (bool) {

        resolve('成功1');

    } else {

        reject('失败1');

    }
 
})


var p2 = new Promise(function(resolve,reject){

    if (bool2) {

        resolve('成功2');

    } else {
        
        reject('失败2');

    }
 
})

var p3 = new Promise(function(resolve,reject){

    if (bool3) {

        resolve('成功3');

    } else {

        reject('失败3');

    }
 
});

Promise.all([p1 , p2 , p3 ]).then((result)=>{
    console.log(result)
})