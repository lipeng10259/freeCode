
require('http').createServer(function (req , res) {

    res.writeHead(200 , {'Content-Type':'image/jpeg'})
    let date = new Date().getTime()
    var stream = require('fs').createReadStream('./banner.png');
    stream.on('data' , function (data) {
        res.write(data)
    })
    stream.on('end' , function () {

        console.log(new Date().getTime() - date);

        res.end()
    })

}).listen(3300)