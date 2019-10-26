var fs = require('fs');

fs.stat('text.text' , function ( error , stat) {

    if(error) {
        console.log(error) 
        return false;
    }

    if(stat.isFile()) {

        console.log('这是文件' + stat.isFile())

    } else if(stat.isDirectory()) {

        console.log('这是目录' + stat.isDirectory())

    }


})