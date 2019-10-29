var http = require('http');

var url = require('url');

var util = require('util');

var server = http.createServer(function (req , res) {

    res.writeHead(200 , {'Content-Type':'text/plain'})

    console.log(url.parse(req.url  , true))

    res.end(util.inspect(url.parse(req.url  , true)))

})
server.listen(3000)

// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: '?name=byvoid&email=byvoid@byvoid.com',
//     query: { name: 'byvoid', email: 'byvoid@byvoid.com' },
//     pathname: '/user',
//     path: '/user?name=byvoid&email=byvoid@byvoid.com',
//     href: '/user?name=byvoid&email=byvoid@byvoid.com' }