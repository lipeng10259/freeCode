var http = require('http');
var querystring = require('querystring')
var util = require('util');
var formidable = require('formidable');

var server = http.createServer(function(req , res) {
    if(req.url == '/post'&& req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        form.uploadDir = "./img";
        form.parse(req, function(err, fields, files) {
          res.writeHead(200, {'content-type': 'text/plain'});
          res.write('received upload:\n\n');
          res.end(util.inspect({fields: fields, files: files}));
        });
     
        return;


    }


}).listen(3000,'127.0.0.1')