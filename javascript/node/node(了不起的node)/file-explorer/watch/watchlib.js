var fs = require('fs');

var lib = fs.readdirSync(process.cwd());

lib.forEach(file => {
    fs.stat(process.cwd()+'/'+file , function (err , data) {

        if(data.isDirectory()){
            fs.watch(process.cwd()+'/'+file , function () {
    
                console.log('文件夹' + file +'更改')
        
            }) 
        }
    })


});