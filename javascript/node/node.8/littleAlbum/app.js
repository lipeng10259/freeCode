var express = require('express');
var bodyParser = require('body-parser');

var router  = require('./controller');



var app = express();

app.set('view engine','ejs')

app.use(express.static('./public'))

app.use(bodyParser.urlencoded({extended:false}))

app.get('/' , router.showIndex);
app.get('/:albumName' , router.showAlbum);
app.use(function (req , res) {
    res.status(404).render('404');
});

app.listen(8080 , function () {console.log('服务器启动8080！')})