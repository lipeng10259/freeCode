var  MongoCliect = require('mongodb').MongoClient;

function _connectDB (callback) {
    var url = 'mongodb://localhost:27017/itcast'

    MongoCliect.connect(url,{ useNewUrlParser: true }, function (err ,client) {

        callback(err , client)
        
        console.log('数据库连接成功！')

    })
}

exports.insertMany = function (collectName , json, callback) {

    _connectDB(function (err , client) {

        var db = client.db();
        
        db.collection(collectName).insertMany(json).then(function(result) {
        
            callback(result)

            client.close()
 
        })

    })

}

exports.findMany = function (collectName , json ,page, callback) {

    var json = json ? json : {};

    _connectDB(function ( err , client) {
      
        var db = client.db();

        var limitNum = page.pageNum;

        var skipNum = page.count * (limitNum-1);

        db.collection(collectName).find(json).limit(page.count).skip(skipNum).toArray(function (err , result) {

            callback(err , result)

            client.close()

        })

    })

}

exports.deleteMany = function (collectName, json, callback) {

    _connectDB(function ( err , client) {

        var db = client.db();

        db.collection(collectName).deleteMany(json).then( function (result) {

            callback(result);

            client.close();

        })

    })

}