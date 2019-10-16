// fs.readFile(filename,[encoding],[callback(err,data)])是最简单的读取
// 文件的函数。它接受一个必选参数 filename，表示要读取的文件名。第二个参数 encoding
// 是可选的，表示文件的字符编码。callback 是回调函数，用于接收文件的内容。如果不指
// 定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data，err 表
// 示有没有错误发生，data 是文件内容。如果指定了 encoding，data 是一个解析后的字符
// 串，否则 data 将会是以 Buffer 形式表示的二进制数据。

var fs = require('fs');

fs.readFile('../index.js' ,'utf8', function (err , data) {

    if(err) {
        console.error(err)
    } else {
        console.log(data)
    }

})