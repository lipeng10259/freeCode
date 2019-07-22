var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
exports.getAllAlbums = function (callback) {

    fs.readdir('./uploads' , function (err , files ) {

        if(err) {
            callback(err , null)
            return ;
        }

        var allAlbums = [];
        (function isDir(i) {
            if(files.length == i){
                callback(null , allAlbums)
                // return ;
            } else {
                fs.stat('./uploads/'+files[i] , function (err , stats) {
                    if(stats.isDirectory()) {
                        allAlbums.push(files[i])
                    }
                    isDir(i+1);
                })
            }
        })(0)
    })
}

exports.getAllAlbumsImages = function (path,callback) {
    fs.readdir(__dirname+'/../uploads/'+path, function (err , files) {
        var allImages = [];
        if(err) {
            callback(err , null);
        } else {
            (function imageArrEach(i){
                if(i == files.length) {
                    callback(null , allImages)
                } else {
                    fs.stat('./uploads/'+path+'/'+files[i], function (err , stats) {
                        if(err) {
                            callback(err , null);
                        } else{
                            if(stats.isFile()) {
                                allImages.push(files[i]);
                            }
                            imageArrEach(i+1);
                        }

                    })
                }
            })(0)            
        }
        

    })



}
exports.uploadImage = function ( req , callback) {
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/../uploads'
    form.parse(req, function(err, fields, files) {
        console.log(files)
        callback(err, fields, files)
    });



}