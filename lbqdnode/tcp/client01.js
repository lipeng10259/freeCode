const qs = require('querystring');
require('http').createServer(function (req , res) {

    var body = '';
    req.on('data' , function (chunk) {
        body += chunk;
    });
    req.on('end' , function () {
        console.log('\n we got: \033[96m' + body + '\033[39m\n')
    })
}).listen(3000)

function send (theName) {
    require('http').request({
        host:'127.0.0.1',
        port:3000,
        url:'/',
        method:'POST'
    },function (res) {
        res.setEncoding('utf8');
        res.on('end' , function () {
            console.log('ddd')
            console.log('\n we got: \033[96m  request complete! \033[39m\n');
            process.stdout.write('\n your name： ')
        })
    
    }).end(qs.stringify({name:theName}))
}

process.stdout.write('\n your name: ')
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data',function (name) {
    send(name.replace('\n', ""));
})

