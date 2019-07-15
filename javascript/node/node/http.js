var http = require('http');
var  url = require('url');
var queryString = require('querystring')


var server = http.createServer(function ( req , res) {

  var  urlData = url.parse(req.url,true).pathname

  res.writeHeader(200,{"content-type":"text/plain;charset=utf-8"})

    if(urlData.substr(0 , 9) === '/student/') {

        

        if(/^\d{10}$/.test(urlData.substr(9))){

            res.end('你请求的学生学号是：'+urlData.substr(9))

        } else{

            res.end('你请求的学生学号错误！')
        
        }
    } else if(urlData.substr(0 , 9) === '/teacher/'){

        if(/^\d{6}$/.test(urlData.substr(9))){

            res.end('你请求的老师编码是：'+urlData.substr(9))

        } else{

            res.end('你请求的老师编码错误！')
        
        }


    }

});

server.listen(3000 , function () {console.log('启动3000')})