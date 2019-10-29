var fs = require('fs');

fs.writeFile('text.text' , '你好node' , function(err) {

    if(err) {
        console.log(err)
        return 
    }
    console.log("文件写入成功")

})