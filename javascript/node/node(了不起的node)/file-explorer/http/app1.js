
require('http').createServer(function(req , res) {

    res.writeHead(200 ,{'Conent-Type':'image/ing'})
    let date = new Date().getTime()
    require('fs').readFile('./banner.png' , function (err, data) {

        console.log(new Date().getTime() - date);

        res.end(data);

    })

}).listen(3400)