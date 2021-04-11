
var express = require('express');

// var session = require('session');

var app = express();

// app.use(express.session())
app.set('view engine' , 'ejs');
app.set('views' , __dirname +'/views');
app.set('view options' ,{layout: false});


// 配置开发环境视图缓存
// app.configure('production' , function () {
//     app.enable('view cache');
// })

console.log(app.set('views'))

app.get('/' , secure,function (req , res ,next) {
    require('fs').readFile('./views/index.ejs' ,function (err , result) {
        console.log(result)
        if(err) return next(err);

        res.render('index');

    })
})

function secure (req, res,next) {
    if(!req.session) {
        return res.send(403)
    }
    next()
}


// app.error(function (err , req ,res ,next) {
//     console.log(err)
// })

// process
//   .on('unhandledRejection', (reason, p) => {
//     console.error(reason, 'Unhandled Rejection at Promise', p);
//   })
//   .on('uncaughtException', err => {
//     console.error(err, 'Uncaught Exception thrown');
//     process.exit(1);
//   });


app.listen(8080)
