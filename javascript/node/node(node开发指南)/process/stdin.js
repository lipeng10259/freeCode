
// process.stdin 是标准的输入流  

// resume 重新开始 默认暂停


process.stdin.resume();

// stdin.on 可以接受收入的数据 
// 控制台打印 'hello world!' stdin.on 接收到数据 为 hello world！

process.stdin.on('data' , function (res) {

    process.stdout.write(res)

})