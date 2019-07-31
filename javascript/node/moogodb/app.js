var express = require('express');
var app = express();
var mongodbconcent = require('./mongoConnect');
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/itcast'

app.get('/', function(req , res) {

    mongodbconcent.insertMany('student', [{name: 'liqing',age: '15',habby: [ '写字', '写bug', '打王者', '写代码' ],score: { shuxue: '80', yuwen: '80' }}], function (result){
        res.json(result);
    })

})

app.get('/find', function ( req , res ) {

    var pageNum = parseInt(req.query.page);

    mongodbconcent.findMany('test' , {} ,{pageNum:pageNum,count:3}, function (err , result) {

        if(err) {
            console.log( err );
            return 
        }
        res.json(result);

    })
    
});

app.get('/detele' , function ( req , res ) {

    mongodbconcent.deleteMany('test' , {"habby":["读书","唱歌","旅游"]},function (result) {

        res.json(result);

    })

})

app.get('/update' , function (req , res) {

    mongodbconcent.updateMany('test' , {"name":"lip"} ,{$set:{"age":"13"}},function (result) {

        res.json(result);

    })

})

app.listen(3000 ,()=>console.log('启动'));