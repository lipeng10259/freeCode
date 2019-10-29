var fs = require('fs');

fs.rename('css' , './file/css2' , function (err) {// 重命名文件和剪切文件
    if(err) {
        console.log(err)
        return false;
    }
console.log('重命名成功')
})