var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path')
var server = http.createServer(function (req , res) {
    var pathname = url.parse(req.url).pathname;
    if(req.url === '/favicon.ico') {
        return 
    }
    console.log(pathname.indexOf('.'))
    if(pathname.indexOf('.') == -1){
        pathname = '/index.html'
    }
    var extname = path.extname(pathname);
    fs.readFile('./www'+pathname,function (err ,data) {

        if(err) {
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8;'})
            res.end('404')
        } else {
            res.writeHead(200,mine(extname)||{'Content-Type':'text/plain'})
            res.end(data)
        }

    })
})
 function mine (type){
    switch (type) {
        case '.html':
        return {'Content-Type':'text/html;charset=utf-8'}
        break;
        case '.css': 
        return {'Content-Type':'text/css;'}
        break;
        case '.png':
        return {'Content-Type':'image/png'}
        break;
    }


 } 
server.listen(3300,function () {console.log('服务器启动')})