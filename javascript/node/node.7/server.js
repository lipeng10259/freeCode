var http = require('http');
var fs   = require('fs'); 
var url = require('url');
var ejs = require('ejs');

var server = http.createServer();
server.on('request' , function (req ,res) {
    var path = url.parse(req.url,true)
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
                            // var template = '<p><%= filesArr[0] %></p>';
                            
                            var dictionary = {filesArr:filesArr};
                            var html = ejs.render(template , dictionary)
                            console.log(html)
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
    } else if(path.pathname == '/get'&&req.method.toLowerCase() == 'get'){
        console.log()
        let fileName = path.query.filename;
        fs.mkdir('./Album/'+fileName , function (err) {
            if(err) {
                res.end('错误')
            }
            res.writeHead(200,{'Content-Type':'text/html;'})
            res.end(`<p>创建完成去上传</p>`) 

        })
    } else if(path.pathname == '/mkdir') {
        fs.readFile('./views/mkdirfile.html' , function ( err , data ) {
            console.log(data)
            if(err) {   
                res.end('錯誤')
            } else{
                res.writeHead(200 , {'Content-Type':'text/html;'})
                res.end(data)
            }
        })  
    }
    else if (path.pathname == '/post') {
        res.end('dddddd');
    }

    // res.end('成功')
})

server.listen(8080,'127.0.0.1' , function () {
    console.log('启动8080！')
})