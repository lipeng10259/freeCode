var fs = require('fs');

fs.rmdir('css2' , function (err) {// 删除目录

    if(err) {
        return false;
    }

    console.log('删除目录')

})