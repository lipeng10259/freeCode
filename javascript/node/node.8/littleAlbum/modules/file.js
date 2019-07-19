var fs = require('fs');
exports.getAllAlbums = function (callback) {

    fs.readdir('./uploads' , function (err , files) {

        var allAlbums = [];

        (function isDir(i) {

            if(files.length == i){
                callback(allAlbums)
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