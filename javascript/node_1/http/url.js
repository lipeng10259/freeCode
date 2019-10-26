var  http = require('http');
var url = require('url'); // url模块解析浏览器地址

// 安装supervisor 自动启动node服务




http.createServer(function (req , res) {

    res.writeHead(200,{'Content-type':'text/html;charset="utf-8"'});

    // req.url 获取浏览器请求地址
    // url.parse() 解析浏览器请求地址

    let query = url.parse(req.url , true);
    // search: '?a=1&b=2',
    // query: { a: '1', b: '2' },
    // pathname: '/news',
    // path: '/news?a=1&b=2',
    // href: '/news?a=1&b=2'
    console.log(query.query.b);

    res.write('你好');
    res.end('node');
    
}).listen(8080);
