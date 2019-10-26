var  http = require('http');


http.createServer(function (req , res) {

    res.writeHead(200,{'Content-type':'text/html;charset="utf-8"'});

    res.write('你好');
    res.end('node');
    
}).listen(8080);
