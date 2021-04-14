
var connect  = require('connect');
var http = require('http');
var time = require('./request-time');

var  server = connect();

// server.use(server.logger('dev'));

server.use(time({time:500}))


server.use('/a',function ( req ,res ,next) {
        res.writeHead(200,{'Content-Type':'plan/text'});
        res.end('Fast!');
})


server.use('/b',function ( req ,res ,next) {

        setTimeout(()=>{
            res.writeHead(200);
            res.end('slow!');
        },1000)


})

server.listen(3300);