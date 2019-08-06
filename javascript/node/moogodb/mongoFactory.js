var  MongoCliect = require('mongodb').MongoClient;

function _connectDB (callback) {
    
    var url = 'mongodb://localhost:27017/itcast'

    MongoCliect.connect(url,{ useNewUrlParser: true }, function (err ,client) {

        callback(err , client)
        
        console.log('数据库连接成功！')

    })
}

// exports.insertMany = function (collectName , json, callback) {

//     _connectDB(function (err , client) {

//         var db = client.db();
        
//         db.collection(collectName).insertMany(json).then(function(result) {
        
//             callback(result)

//             client.close()
 
//         })

//     })

// }

// exports.findMany = function (collectName , json ,page, callback) {

//     var json = json ? json : {};

//     _connectDB(function ( err , client) {
      
//         var db = client.db();

//         var limitNum = page.pageNum;

//         var skipNum = page.count * (limitNum-1);

//         db.collection(collectName).find(json).limit(page.count).skip(skipNum).toArray(function (err , result) {

//             callback(err , result)

//             client.close()

//         })

//     })

// }

// exports.deleteMany = function (collectName, json, callback) {

//     _connectDB(function ( err , client) {

//         var db = client.db();

//         db.collection(collectName).deleteMany(json).then( function (result) {

//             callback(result);

//             client.close();

//         })

//     })

// }

// exports.updateMany = function (collectName , json1 , json2, callback) {

//     _connectDB(function (err , client ) {

//         var db = client.db()

//         db.collection(collectName).updateMany(json1 , json2).then(function ( result ) {

//             callback(result)

//             client.close()

//         })

//     })

// }

exports.mongoFactory = function ( type , collectName , objData ) {

    var factory = new Object();

        factory.objData = objData

    _connectDB(function (err , client) {

        var db = client.db();
     
        if ( type === 'insertMany' ) {

            db.collection(collectName).insertMany(objData.insertData).then(function(result) {
        
                objData.callback(result)
    
                client.close()

                return factory;
     
            })

        } else if( type === 'findMany' ) {
        
            let limit = objData.limit || 0;

            let skip = objData.skip * (limit-1) || 0;
    
            let json = objData.findData || {};

            db.collection(collectName).find(json).limit(limit).skip(skip).toArray(function (err , result) {
    
                objData.callback(err , result)
    
                client.close()

                return factory;
    
            })
        } else if( type === 'deleteMany' ) {

            let json = objData.deteleData || {}

            db.collection(collectName).deleteMany(json).then( function (result) {

                objData.callback(result);
    
                client.close();

                return factory;
    
            })
        } else if ( type === 'updateMany' ) {

            let checkData = objData.checkData;

            let updateData = objData.updateData

            db.collection(collectName).updateMany( checkData , updateData ).then(function ( result ) {

                objData.callback(result)
    
                client.close()

                return factory;
    
            })

        }
     

    })

}

//  mongoFactory ;