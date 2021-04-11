var  http = require('http');

http.createServer(()=>{
    process.on('uncaughtException',function (err) {
        console.log('ddd')
        console.error(err);
        process.exit(1)
    })
    throw new Error('错误不会被捕获');

}).listen(3000);

