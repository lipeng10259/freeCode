

var mybuffer = new Buffer('rtext','base64');
console.log(mybuffer);
require('fs').writeFile('logo.text',mybuffer,function(error){
    console.log(error);
});