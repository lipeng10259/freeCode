var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
// 公开指定目录 使用use 方法指定我们静态资源目录 如css js image等 这样公开我们的目录，通过目录路径可以直接访问我们的img图片和css,js等
app.use(express.static('./public/'));
app.use('/css/' , express.static('./css/'));
app.use(bodyParser.urlencoded({extended:false}))

// app.set('views' , __dirname+'/setView')设置默认的ejs存的文件夹
app.set('view engine' , 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.get('/', function (req , res) {
    console.log(req.session)
    if(!req.session.name){
        res.send('session 未设置')
    } else {
        res.send('session：'+req.session.name)
    }
    // res.render('good', {news:[0 , 2, 3]})

})
app.get('/get' , function (req , res) {
    res.send('session get：'+req.session.name)
})

app.post('/get' , function (req , res) {
    console.log(res)
})
app.get('/login' , function (req , res) {
    req.session.name = 'session登录成功'
    res.send('ddd')
})

app.get('/:username/:id', function (req , res) {

    res.send('hello express about')

})

app.get('/admin/login', function (req , res) {
    res.send('login')
})


app.get(/^\/student\/([\d]{6})$/, function (req,res){
    console.log(req.params)
    res.send('ddd');
})


app.use(function(req, res, next) {

    res.status(404).send('Something broke!');
  });

app.listen(3000 , function () {
    console.log('app is runing at port 3000')
})

// 使用第三方工具来解决频繁修改代码重启服务器问题 modemon