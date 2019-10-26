require('http').createServer(function (req , res) {

    res.writeHead(200);

    res.end('hello world');

}).listen(3000);

require('http').request({
    host:'127.0.0.1',
    port:3000,
    url:'/',
    method: 'GET',
} , function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data' , function (chunk) {
        body+=chunk;
    });
    res.on('end' , function () {
        console.log('\n We got: \033[96m' + body + '\033[39m\n');
        // process.stdin.resume()
    })

}).end()