var fs = require('fs');

fs.mkdir('css' , function (err) {

    if(err) {
        console.log(err)
    }
    console.log('创建成功')

})