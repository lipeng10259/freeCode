var express = require('express');

var app = express();
// 公开指定目录 使用use 方法指定我们静态资源目录 如css js image等 这样公开我们的目录，通过目录路径可以直接访问我们的img图片和css,js等
app.use('/public/' , express.static('./public/'));

app.get('/', function (req , res) {

    res.send('hello express !')

})

app.get('/about', function (req , res) {

    res.send('hello express about')

})

app.listen(3000 , function () {
    console.log('app is runing at port 3000')
})

// 使用第三方工具来解决频繁修改代码重启服务器问题 modemon