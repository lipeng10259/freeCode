var http = require('http');
var util = require('util');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');

var server = http.createServer(function (req , res) {
    if(req.url == '/post'&& req.method.toLocaleLowerCase()=='post'){
        var form = new formidable.IncomingForm();
        form.uploadDir='./img'
        form.parse(req , function (err , fields, files){

            var obj = util.inspect({files:files,fields:fields})

            var newName = __dirname+'/'+files.img.path;
            var oldName = __dirname+'/'+files.img.name;
            var exname = path.extname(oldName);
            console.log(newName +'--'+oldName)
            fs.rename(newName , oldName , function (err) {
                if(err) {
                    res.writeHead(200 , {'Content-Type':'text/plain;charset=utf-8;'})
                    res.end('改名失败！')
                } else {
                    res.writeHead(200 , {'Content-Type':'text/plain;charset=utf-8;'})
                    res.end('改名成功！')
                }
            })



        })
    }

}).listen(3000,'127.0.0.1',function () {console.log('启动')});