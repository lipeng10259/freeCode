// http.get(options, callback) http 模块还提供了一个更加简便的方法用于处
// 理GET请求：http.get。它是 http.request 的简化版，唯一的区别在于http.get
// 自动将请求方法设为了 GET 请求，同时不需要手动调用 req.end()


var http = require('http');
http.get({host:'127.0.0.1',port:'3000'},function ( res ) {


    res.setEncoding('utf8');

    res.on('data' , function ( data ) {

        console.log(data)

    })

})