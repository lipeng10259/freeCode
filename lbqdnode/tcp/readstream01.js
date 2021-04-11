
const connect = require('connect');

console.log(connect)

require('http').createServer(function (req , res) {
    
    res.writeHead(200,{"Content-Type":'image/png'});

    require('fs').createReadStream('./1585454895.png').pipe(res)

}).listen(3400)