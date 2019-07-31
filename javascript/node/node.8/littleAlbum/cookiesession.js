var express = require('express');
var app = express();
var session = require('express-session')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.get('/',function (req , res) {
    res.cookie('name','1111s',{maxAge: 900000})
    res.send("cookie");
})

app.get('/fav' , function ( req , res) {

    var id = req.query.id

    var fav = req.cookies.fav || [];

    fav.push(id);

    res.cookie('fav',fav ,{maxAge:900000})

    res.send({...fav});

})
app.get('/ses' , function ( req , res ) {

    req.session.login = true
    req.session.msg = {
        name:'lipeng',
        sex:'nan'
    }

    res.send('ses');

})

app.get('/chses' , function ( req , res ) {
    if (req.session.login) {
        res.send('登录成功:用户名'+req.session.msg.name) 
    } else {
        res.send('登录失败！');
    }

})

app.listen(3300 ,()=>console.log('启动'));