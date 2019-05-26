const  fs = require('fs');

fs.writeFile('../helloworld.txt','我是nodejs', function ( error ){

    if( error ) {

        console.log('文件写入失败')

    } else {

        console.log('文件写入成功')

    }


    // console.log( data.toString() );

})