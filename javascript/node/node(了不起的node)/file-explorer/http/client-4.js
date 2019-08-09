
var qs = require('querystring'),
http = require('http');
var search = process.argv.slice(2).join(' ').trim();
console.log(process.argv)
console.log(search)
if (!search.length) {

    return console.log('\n Usage: node tweets <search term>\n');
}

console.log('\n search for: \033[96m' + search +'\033[39m\n')

http.request({
    host:'www.baidu.com',
    path:'/s?'+qs.stringify({wd:search})
}, function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk){
        body += chunk;

    })
    res.on('end' , function () {
        // var obj = JSON.parse(body);
        // console.log(body)
    })
}).end()