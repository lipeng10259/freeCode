const express = require('express');
const md5= require('md5');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const url = 'mongodb://127.0.0.1:27017/page';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.get('/userMsg',function(req , res) {

    req.session.name = 'admin'

    let name = req.session.name

    MongoClient.connect(url , { useNewUrlParser: true },function (err , client) {
        if(err) {
            console.log(err);
            return ;
        }
        let db = client.db();

        db.collection('user').find({'name':name}).toArray(function(err , result){

            if (err) throw err;

            if(result.length == 0) {

                res.send({'errno':-1,'msg':'该用户暂未注册'})

            } else if (result.length != 0) {
                console.log(result[0])
                res.send({'errno':0,'msg':{name:result[0].name,id:result[0]._id}})
            }

            client.close()
        })

    })

})

app.post('/register' , function (req , res , next) {// 注册验证

    let name = req.body.name

    let password = req.body.password

    MongoClient.connect('mongodb://127.0.0.1:27017/page' ,{ useNewUrlParser: true } , function(err , client){
        if (err) {
            console.log(err)
            return ;
        }
        let db = client.db();

        db.collection('user').find({'name':name}).toArray(function(err, result) {
            if (err) throw err;
            if(result.length == 0){
                next()
            } else {
                res.send({'errno':-1,'msg':"该用户已注册"})
            }
            
            client.close();
        })
    })   
})

app.post('/register' , function (req , res) {// 注册用户存储

    let name = req.body.name

    let password = md5(req.body.password)

    MongoClient.connect('mongodb://127.0.0.1:27017/page' ,{ useNewUrlParser: true } , function(err , client){

        if (err) {
            console.log(err)
            return ;
        }

        let db = client.db();

        db.collection('user').insertOne({'name':name,'password':password},function(err , result) {

            if(err) {
                console.log(err)
                return ;
            }

            res.send({'errno':0,'msg':"注册成功"})

            client.close()

        })
    })   
})

app.post('/login' , function (req , res , next) {

    let name = req.body.name;

    let password = req.body.password;

    MongoClient.connect(url , { useNewUrlParser: true },function (err , client) {
        if(err) {
            console.log(err);
            return ;
        }
        let db = client.db();

        db.collection('user').find({'name':name}).toArray(function(err , result){

            if (err) throw err;

            if(result.length == 0) {

                res.send({'errno':-1,'msg':'该用户暂未注册'})

            } else if (result.length != 0) {

                if(result[0].password != md5(password)){

                    res.send({'errno':-2,'msg':'密码错误'})

                } else {

                    req.session.name =  name

                    req.session.password =  password

                    console.log(req.session)

                    console.log('注册成功')

                    res.send({'errno':0,'msg':'登录成功'})
                }
            }

            client.close()

        })

    })

})
app.get('/addLable' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

    


})
app.get('/isLogin' , function(req , res) {
    console.log(req.session)
    if(!req.session.name){
       res.send({'errno':-1,'msg':'登陸失敗'})
    } else {
        res.send({'errno':0,'msg':'登陸成功'})
    }
})

app.listen(3300)