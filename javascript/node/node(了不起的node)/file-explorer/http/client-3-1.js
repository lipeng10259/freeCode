var http = require('http'),
qs = require('querystring');

function send (theName) {

    http.request({
        host:'127.0.0.1',
        port:3000,
        method:'POST'
    },
    function (res) {
        res.setEncoding('utf8');
        res.on('end' , function () {

            console.log('\n \033[90m  request complete! \033[39m');

            process.stdout.write('\n your name:');
            
        })
    }).end(qs.stringify({name: theName}))

}

process.stdout.write('\n your name: ');

process.stdin.resume();

process.stdin.on('data' , function ( name ) {
    send(name.toString().replace('\n' , ''))
});