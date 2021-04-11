const fs = require('fs'),
        stdin = process.stdin,
        stdout = process.stdout;

// process.cwd() //G:\web\test\freeCode\lbqdnode\stdin-stdout\file-explorer 输入当前文件的路径

// console.log(fs.readdirSync('./')) //[ 'index.js', 'package.json', 'test.text' ]

fs.readdir(process.cwd(),function (err,files){

    console.log('');

    if(!files.length) { // 如果数组为空，告诉用户目录没有文件
        return console.log('    \033[31m No files to show!\033[39m\n')
    } 
    function file (i) {

        var filename = files[i];
    
        fs.stat(__dirname+"/"+filename,function (err ,stat) {

            if(stat.isDirectory()){// 检测目录文件

                console.log('    '+i+"    \033[36m" + filename + '/\033[39m]'); 
            } else {
                console.log('    '+i+"    \033[90m" + filename + '/\033[39m]'); 
            }
    
            if (++i == files.length) {
                read()
            } else {
                file(i)
            }
        })
    }
    file(0)
    function read () {
        console.log('');
        stdout.write('    \033[33mEnter your choice: \033[39m');
        stdin.resume(); // 等待用户输入
        stdin.setEncoding('utf8'); // 设置流编码为utf-8
        stdin.on('data',option);// 监听用户输入
    }
    
    function option (data) {
        let filename = files[Number(data)];
        if (!files[Number(data)]) {
            stdout.write('    \033[31mEnter your choice:  \033[39m')
        } else {
            stdin.pause();
            fs.readFile(__dirname + '/' +filename ,'utf-8',function (err , data) {
                console.log('');
                console.log('\033[39m' + data.replace(/(.*)/,'    $1') + '\033[39m');
            })
        }
    }


})




