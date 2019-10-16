
var http = require('http');

http.request({
    host:'127.0.0.1',
    url:'/',
    port:'3000',
    method:'POST'
}, function (res){
    var body = ''
    res.setEncoding('utf8');
    res.on('data' , function(chunk) {
        console.log(chunk)
        body += chunk
    });
    
    res.on('end' , function () {
        console.log(body)
    });

}).end();