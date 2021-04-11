
const fs = require('fs');


var stream = fs.createWriteStream('./text01.txt',{encoding:'utf8'}); // 次读取的方法是分段来读


fs.watchFile(process.cwd()+'/'+"text01.txt",function () {
    console.log('文件变动')
})



stream.on('error', (err) => {
    console.log('发生异常:', err);
})

stream.write('这是要写的内容1');

stream.on('open' , function (res) {
    console.log('文件打开:'+res)
})

stream.on('finish' , function (res) {
    console.log('文件写入完成')
})


stream.on('close',function(chunk) {
    console.log('文件关闭')
})

stream.end()


