const express = require('express');
const session = require('express-session');
const md5= require('md5');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/page';

var app = express();

app.use(session({
    secret:'keybord cat',
    resave:true,
    name:'page_id',
    cookie: {maxAge: 600000},
    saveUninitialized:true
}))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});
app.get('/isLogin' , function(req , res ,next) {
    console.log(req.session)
    console.log('dddd')
    if(!req.session.name){
       res.send({'errno':-1,'msg':'未登录'})
    } else {
        
        res.send({'errno':0,'msg':'已登录'})
    }
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
                console.log(result)
                res.send({'errno':-1,'msg':'该用户暂未注册'})

            } else if (result.length != 0) {

                if(result[0].password != md5(password)){

                    res.send({'errno':-2,'msg':'密码错误'})

                } else {

                    req.session.name =  name

                    req.session.password =  password

                    console.log(req.session);
                    console.log('登录成功')

                    res.send({'errno':0,'msg':'登录成功'})
                }
            }

            client.close()

        })

    })

})

app.get('/userMsg',function(req , res) {

    console.log(req.session)


})


app.listen(3300)