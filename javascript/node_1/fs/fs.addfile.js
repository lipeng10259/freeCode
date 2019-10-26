var fs = require('fs');

fs.appendFile('text.text' ,new Date() + '我是nodejs后面追加的文字', function (err) {// 在文件内容后面写入

    if (err) {
        console.log(err);
        return ;
    }

    console.log('文件追加成功')
    

})