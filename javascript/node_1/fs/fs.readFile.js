var fs = require('fs');


fs.readFile('text.text' , function (err , data) {

    if(err) {
        console.log(err);   
        return false;
    }
     console.log(data.toString())

})