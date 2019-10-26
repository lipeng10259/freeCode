// 加载http核心模块
const  http = require('http');
const express = require('express');
const session = require('express-session');

const app = express();

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

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

  app.get('/' , function (req , res) {

    console.log(req.session)
    console.log('获取session')
    res.send('session 登录成功' + req.session.name)

  })

  app.get('/login' , function (req , res) {

    req.session.name = 'li de'
    console.log(req.session)
    console.log('设置session')
    res.send('session 设置')
    
})

// 4 . 绑定端口号 ， 启动服务器

app.listen(3030 , function ( ) {

    console.log('服务器启动成功， 可以访问')

})



