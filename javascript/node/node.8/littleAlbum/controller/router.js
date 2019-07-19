var file = require('./../modules/file');

exports.showIndex = function ( req , res) {

    file.getAllAlbums(function (data) {
        res.render('index',{album:data})
    })
    

};

exports.showAlbum = function ( req , res) {

    res.send('我是相册！'+req.params.albumName)

}