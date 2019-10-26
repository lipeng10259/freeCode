
var express = require('express');

var app = express();

var users = {
    'byvoid':{
        'name':'carbo',
        'website':"www.baidu.com"
    }
}

app.get('/', function ( req , res) {
    res.send('hello world');
})

app.get('/user/:id' , function (req , res, next) {

    if(users[req.params.id]) {

        next()

    }  else  {

        next ( new Error(req.params.id + ' does not exist.'))

    }

});

app.get('/user/:id', function (req , res, next) {

    console.log('req')

    res.send(JSON.stringify(users[req.params.id]))

})

app.listen(3000)

