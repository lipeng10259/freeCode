
var http = require('http');

var server = http.createServer( function ( req , res) {

    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('hello node!')
    res.end('<h1>NODE</h1>')

})

server.listen(3000)