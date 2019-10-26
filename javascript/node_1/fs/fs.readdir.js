var fs = require('fs');

fs.readdir('./' , function (err , res) {// 读出文件列表
    if(err) {
        console.log(err)
        return ;
    }

    console.log(res)

})