

var start = Date.now();

setTimeout(()=>{

    console.log(Date.now() - start);

},1000)

setTimeout(()=>{
    console.log(Date.now() - start);
},2000)


// 1003
// 2001