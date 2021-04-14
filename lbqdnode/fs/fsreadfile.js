
const fs = require('fs');

// fs.readFile('./text.txt' ,'utf-8', function (err , context) { 等读取完之后才能触发回调函数
//     if(err) {
//         throw err;
//     }
//     console.log(context)
// })


var stream = fs.createReadStream('./text.txt'); // 次读取的方法是分段来读

var data = '';
stream.on('data' , function (chunk) {
    data += chunk;
})

stream.on('end',function(chunk) {
    console.log(data)
})

var write = fs.createWriteStream()

write.on('./text01.txt','我是stream', function (data){
    console.log(data)
})