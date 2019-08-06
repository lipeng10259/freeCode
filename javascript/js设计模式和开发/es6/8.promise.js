var bool = true;
var bool2 = false;
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

p1.then(function (result) { 
   
   return p2

}).then(function (result) {

    return p3

}).then(function(result){

    console.log(result)

}).catch(function(error){

    console.log(error+'end');

})