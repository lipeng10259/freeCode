
var promise = new Promise(function(resolve, reject){

    // throw new Error('test');

    resolve()
    
})

promise.then(function(){
    throw new Error('test1');
}).catch(function (err) {
    console.log(err)
})