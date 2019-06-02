const fs = require('fs');
const http = require('http');


const server = http.createServer()

server.on('request' , function ( req , res) {

    var url = req.url ;


    if( url === '/') {

        fs.readFile('./index.html' , function ( error , data ) {

            console.log(error)

            if( error ) {

                res.setHeader('Content-Type' , 'text/plain ; charset = utf-8')

                res.end('文件信息读取失败;')
                
            } else {

                res.setHeader('Content-Type','text/html;charset=utf-8 ')

                res.end(data)

            }

        })

    } else if (url === '/png') {

        fs.readFile('./house.png' , function (error , data) {

            if(error) {

                res.setHeader('Content-Type' , 'text/plain ; charset = utf-8')

                res.end('图片读取失败！')

            } else {

                res.setHeader('Content-Type' , 'image/png')

                res.end(data)

            }

        })

    } else if ( url === '/text') {

        fs.readFile('./text.txt' , function ( error , data ) {

            if( error ) {

                res.setHeader('Content-Type' , 'text/plain ; charset= utf-8;')

            } else {

                res.setHeader('Content-Type' , 'text/plain ; charset=utf-8;')
                res.end(data)

            }

        })

    } else {

        res.end('404') ;

    }

})


server.listen(3000 , function () {
    console.log('服务器已启动')
})