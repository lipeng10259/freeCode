const http = require('http') ;

const fs = require('fs') ;

const server = http.createServer() ;


// 实现apache服务器的www目录

server.on('request' , function ( req , res) {

    var url = req.url

    if( url === '/' ){

        res.end('首页')

    } else {

        res.end('404')

    }


})

server.listen(3000 , function () {

    console.log('服务器启动成功')

})