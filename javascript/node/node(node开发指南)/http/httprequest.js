//httprequest.js
var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
name: 'byvoid',
email: 'byvoid@byvoid.com',
address: 'Zijing 2#, Tsinghua University',
});
var options = {
host: 'www.byvoid.com',
path: '/application/node/post.php',
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Content-Length' : contents.length
}
};
var req = http.request(options, function(res) {
res.setEncoding('utf8');
res.on('data', function (data) {
console.log(data);
});
});
req.write(contents);
req.end();
// 运行后结果如下：
// array(3) {
// ["name"]=>
// string(6) "byvoid"
// ["email"]=>
// string(17) "byvoid@byvoid.com"
// ["address"]=>
// string(30) "Zijing 2#, Tsinghua University"
// }