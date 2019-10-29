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


app.get('/addLabel' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

    let label = req.query.label

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

                let _id = result[0]._id

                db.collection('articleType').find({'id':_id,'articleLabel':{$elemMatch:{'label':label}}}).toArray(function(err , result){

                    if (err) throw err;
        
                    if(result.length == 0) {
        
                        next()
        
                    } else {

                        res.send({'errno': -1,'msg':'类型已添加'})                       
                    
                    }
        
                    client.close()
        
                })
                        
   
            }

            // client.close()

        })


    })
})
app.get('/addLabel' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

    let label = req.query.label

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
 
                let _id = result[0]._id

                db.collection('articleType').find({'id':_id}).toArray(function(err , result){

                    if (err) throw err;
                    console.log(result)
                    if(result.length == 0) {
                        console.log(result)
                        db.collection('articleType').insertOne({'id':_id,'articleLabel':[{'label':label}]},function(err , result){

                            if (err) throw err;
        
                            res.send({'errno':0 , 'msg':'添加成功'})
        
                        })                        
                    } else {
                        let arr = result[0].articleLabel
                        // let arr = result[0]&&result[0].length > 0 ? result[0].articleLabel : []
                        // console.log(arr)
                      

                        arr.push({'label':label})

                        console.log(arr);

                        db.collection('articleType').updateOne({'id':_id},{$set:{'articleLabel':arr}})
                        res.send({'errno':0 , 'msg':'添加成功'})
                        //   console.log('插入数组')                      
                    }



                })
            }

            // client.close()

        })

    })

})
app.get('/getLabel' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

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
 
                let _id = result[0]._id

                db.collection('articleType').find({'id':_id}).toArray(function(err , result){

                    if (err) throw err;
           
                    if(result.length == 0) {
                
    
                            res.send({'errno':-1 , 'msg':'暂未添加类型'})
                              
                    } else {
                        
                        res.send({'errno':0 , 'msg':result[0].articleLabel})                     
                    }



                })
            }

            // client.close()

        })

    })

})
app.get('/addArticle' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

    let articleContent = req.query

    let nowDate = new Date(); 

    let date =  nowDate.getFullYear()+'.'+(nowDate.getMonth()+1)+'.'+nowDate.getDate();
    
    articleContent.author = name;

    articleContent.articleId = nowDate.getTime()

    articleContent.date = date;

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
 
                let _id = result[0]._id

                db.collection('article').find({'id':_id}).toArray(function(err , result){

                    if (err) throw err;
  
                    if(result.length == 0) {
    
                        db.collection('article').insertOne({'id':_id,'articleList':[articleContent]},function(err , result){

                            if (err) throw err;
        
                            res.send({'errno':0 , 'msg':'添加成功'})
        
                        })                        
                    } else {
                        let arr = result[0].articleList

                        arr.push(articleContent)

                        console.log(arr)
                        
                    
                        db.collection('article').updateOne({'id':_id},{$set:{'articleList':arr}})

                        res.send({'errno':0 , 'msg':'添加成功'})
                        //   console.log('插入数组')                      
                    }



                })
            }

            // client.close()

        })

    })

})
app.get('/articleList' , function (req , res , next){

    req.session.name = 'admin';

    let name = req.session.name;

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
 
                let _id = result[0]._id

                db.collection('article').find({'id':_id}).toArray(function(err , result){

                    if (err) throw err;

                    res.send({'errno':0 , 'msg':'成功','data':result[0].articleList})
                        //   console.log('插入数组')                      
             



                })
            }

            client.close()

        })

    })

})
app.get('/deteleArticle' , function ( req , res ){

    req.session.name = 'admin';

    let name = req.session.name;

    let articleId = req.query.id

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
 
                let _id = result[0]._id
                console.log(articleId)
                console.log(_id)
                // db.collection('article').update(
                // {
                //     id:_id
                // },
                // {
                //     $pull:{'articleList':{'articleId':articleId}
                // }})
                db.collection('article').find({id:_id}).toArray(function (err , result){
                    console.log(result)
                })
                res.send({'errno':0 , 'msg':'删除成功'})
                        //   console.log('插入数组')                      
                // client.close()
            }

            

        })

    })    
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