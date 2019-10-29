var fs = require('fs');

fs.unlink('text.text' , function (err) {// 删除文件

    if(err) {
        return false;
    }

    console.log('删除文件')

})