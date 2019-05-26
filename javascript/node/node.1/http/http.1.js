// 加载http核心模块
const  http = require('http') ;


// 2. 使用http.createServer() 创建一个web服务器

// 返回一个server实例

var server = http.createServer() ;
 
// 3 . 服务器 提供服务 对数据的服务  发请求 接收请求 处理请求 发送响应

//注册 request 请求事件

// 当客户端请求过来 ，就会自动触发服务器 request 请求事件 然后执行第二个参数 回调处理函数

/**
 * request 请求对象
 * 
 * 请求对象可以用来获取客户端的一些请求信息(如请求的路径)
 * 
 * response 响应对象 
 * 
 * 响应对象可以用来给客户端发送响应的信息
 *
 * 
 * 
 * 
 * */

server.on( 'request' , function ( request , response ) {

    console.log(request.socket.remotePort)

    console.log('请求路径是 '+ request.url)
    // console.log('请求路径是 '+ request.url)

    console.log('收到客户端请求')


    // response 有一个方法 write 可以给客户端发送数据



    // 由于现在服务器还非常的弱， 无论什么请求 都只能响应hello

    // 希望请求不同的路径的时候响应不同的结果

    /**
     * 
     * 
     * 
     * *********/

     if( request.url === '/' ){

        response.write('hello 我是首页')
        response.end()


     } else if( request.url === '/index') {

        response.write('hello 我是index页面')
        response.end()

    } else if( request.url === '/data' ){

        // 响应内容只能是二进制或者字符串 

        var data = [
            {
                name : 'ddd',
                data: '111'
            }

        ]

        response.end(JSON.stringify(data))


    } else {

        response.end('404')

     }

     

})

// 4 . 绑定端口号 ， 启动服务器

server.listen(3000 , function ( ) {

    console.log('服务器启动成功， 可以访问')

})



