var fs = require('fs');

fs.open("../index.js" , 'r','0666' ,function (err , data) {
    if(err) {
        
        console.error(err)

    } else {
        console.log(data)
    }
})