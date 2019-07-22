var file = require('./../modules/file');
var fs = require('fs');

exports.showIndex = function ( req , res , next) {

    file.getAllAlbums(function (err,data) {
        if(err) {
            next()
        } else{
            res.render('index',{album:data})
        }
    })
    

};

exports.showAlbum = function ( req , res ,next) {

    file.getAllAlbumsImages(req.params.albumName, function(err , data) {
        if( err ) {
            next()
        } else{
            res.render('album',{albumName:req.params.albumName,imgArr:data})
        }
      
    })

}

exports.showUp = function ( req , res , next) {
    file.getAllAlbums(function (err,data) {
        if(err) {
            next()
        } else{
            res.render('up',{album:data})
        }
    })  
}


exports.upload = function ( req , res , next) {
    file.uploadImage(req , function ( err, fields, files){
        var filepath = fields.filename;
        var newname = files.image.name;
        var oldname = files.image.path;
        fs.rename(oldname  , __dirname+'/../uploads/'+filepath+'/' + newname , function (eror) {
            if(eror) {
                console.log('改名失敗！')
                next();
            } else {
                fs.unlink(oldname,function (err) {
                    console.log(err)
                });
                console.log('改名成功！')
            }
        })
    })
}