
require('http').createServer(function(req , res) {

    res.writeHead(200 ,{'Conent-Type':'image/pain'})
    
    console.log(req.connection)

    res.end('ddd');

}).listen(3400)