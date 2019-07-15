var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req , res) {

    console.log('req')

    fs.readFile('./../helloworld.txt' , function (error , data) {

        if(error) {

            console.log(error)

        } else {
            res.writeHead(200 ,{'content-type':'text/plain;charset=utf-8;'})
            res.end(data)
        }

    })


}); 

server.listen(3200)