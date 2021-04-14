
const connect = require('connect'); 

var  server = connect.createServer();

server.use(connect.static(__dirname +'/website'));

server.use(function (req ,res ,next) {

    // 记录日志错误
    console.error(' %s %s ', req.methos , req.url)

    next()

})


server.use(function(req, res , next) {
    if('GET' === req.method && '/image' == req.url.substr(0,7)) {
        // 托管图片

    } else {
        next()
    }
})


server.use(function(req, res , next) {
    if('GET' === req.method && '/' === req.url) {
        // 相应index.html文件

    } else {
        next()
    }
})

server.use(function(req, res , next) {

    res.writeHead(404);
    res.end('Not found');
})


server.use(connect.logger('dev'))



server.listen(3000);