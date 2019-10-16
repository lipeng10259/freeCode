

// fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead,
// buffer)])是 POSIX read 函数的封装，相比 fs.readFile 提供了更底层的接口。fs.read
// 的功能是从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象。offset 是
// buffer 的写入偏移量。length 是要从文件中读取的字节数。position 是文件读取的起始
// 位置，如果 position 的值为 null，则会从当前文件指针的位置读取。回调函数传递
// bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。
// 以下是一个使用 fs.open 和 fs.read 的示例。
var fs = require('fs');
fs.open('content.txt', 'r', function(err, fd) {
if (err) {
console.error(err);
return;
}
var buf = new Buffer(8);
fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
if (err) {
console.error(err);
return;
}
console.log('bytesRead: ' + bytesRead);
console.log(buffer);
})
});
// 运行结果则是：
// bytesRead: 8
// <Buffer 54 65 78 74 20 e6 96 87>


// 表4-1 fs 模块函数表


// 功 能 异步函数 同步函数
