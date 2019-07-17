var http = require('http');
var querystring = require('querystring')

var server = http.createServer(function(req , res) {
    if(req.url == '/post'&& req.method.toLowerCase() == 'post'){
        var str = ''
        req.addListener('data' , function (trunk) {
            str += trunk
        })

        req.addListener('end' , function () {
            console.log(querystring.parse(str))
        })

    }


}).listen(3000,'127.0.0.1')