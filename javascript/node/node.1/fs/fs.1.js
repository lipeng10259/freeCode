const  fs = require('fs');

fs.readFile('../text.txt' , function ( error , data ){

    if( error ) {

        console.log('读取文件失败！')

    } else {

        console.log( data.toString() );

    }

    // console.log( data.toString() );

})