var fs = require('fs');

var files = fs.readdirSync(process.cwd());

files.forEach(element => {
    console.log(element)
    fs.watchFile(process.cwd()+'/'+ element, function () {
        console.log(element + ' changed');
    })

});
