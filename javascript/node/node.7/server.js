var http = require('http');
var fs   = require('fs'); 
var url = require('url');
var ejs = require('ejs');
var util = require('util');
var formidable = require('formidable');

var server = http.createServer();
server.on('request' , function (req ,res) {
    var path = url.parse(req.url,true)
    console.log(req.method.toLowerCase())
    if(path.pathname == '/'){
        fs.readdir('./Album' , function (err , files) {
            var  filesArr = [];
            (function readMkdir(i) {
                if(files.length == i){
                    fs.readFile('./views/index.ejs' , function ( err , data) {
                        if(err) {
                            res.writeHead(200 , {"Content-Type":"text/plain;"})
                            res.end("参数错误")
                        } 
                        var template = data.toString();
                        var dictionary = {filesArr:filesArr};
                        var html = ejs.render(template , dictionary)
                        res.writeHead(200,{"Content-Type":"text/html;"})
                        res.end(html);
                    })
                
                    return ;
                } else {
                    fs.stat('./Album/'+files[i], function (err , stats) {
                        if( stats.isDirectory()) {
                            filesArr.push(files[i])
                        }
                        i++
                        readMkdir(i)
                    })
                }
    
            })(0)
        })
    } 
    else if(path.pathname == '/get'&&req.method.toLowerCase() == 'get'){
        let fileName = path.query.filename;
        fs.mkdir('./Album/'+fileName , function (err) {
            if(err) {
                res.end('错误')
            }
            res.writeHead(200,{'Content-Type':'text/html;'})
            res.end(`<p>创建完成去上传</p>`) 

        })
    } 
    else if(path.pathname == '/mkdir') {
        fs.readFile('./views/mkdirfile.html' , function ( err , data ) {
            if(err) {   
                res.end('錯誤')
            } else{
                res.writeHead(200 , {'Content-Type':'text/html;'})
                res.end(data)
            }
        })  
    }
    else if( path.pathname == '/post'&& req.method.toLowerCase()=='post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./views";
        form.parse(req, function(err, fields, files) {
       
            res.writeHead(200, {'content-type': 'text/plain'});
            var savePath = fields.Album;
            var imgName = files.img.path
            var newName = __dirname +'/'+ savePath +'/'+files.img.name
        //   console.log(util.inspect({fields: fields, files: files}));
        });
     
        return;


    }
    else if (path.pathname == '/post') {
        fs.readdir('./Album' , function (err , files) {
            var  filesArr = [];
            (function readMkdir(i) {
                if(files.length == i){
                    fs.readFile('./views/uploadImg.ejs' , function (err , data) {
                        if(err) {
                            res.end('err')
                        } else{
                            var template = data.toString();
                            var dictionary = {filesArr: filesArr};
                            var html = ejs.render(template , dictionary);
                            res.writeHead(200,{"Content-Type":"text/html;"})
                            res.end(html);
                        }
                    })
                    return ;
                } else {
                    fs.stat('./Album/'+files[i], function (err , stats) {
                        if(stats.isDirectory()) {
                            filesArr.push(files[i])
                        }
                        i++
                        readMkdir(i)
                    })
                }
    
            })(0)
        })
    }


    // res.end('成功')
})

server.listen(8080,'127.0.0.1' , function () {
    console.log('启动8080！')
})