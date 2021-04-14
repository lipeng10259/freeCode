
require('http').createServer(function (req , res) {
    
    res.writeHead(200,{"content-Type":'image/png'});

    var stream = require('fs').createReadStream('./1585454895.png');

    stream.on('data' , function (data) {
        res.write(data);
    })
    stream.on('end' , function () {
        res.end()
    })

}).listen(3300)