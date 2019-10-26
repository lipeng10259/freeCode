var ejs = require('ejs');
var http = require('http');


http.createServer(function (req , res) {

    if(req.url === '/') {

        ejs.renderFile('./views/index.ejs' ,{msg:"我是首页"}, function (err,data) {

            if(err) {
                console.log(err);
                return false;
            }

            res.end(data)

        })

    }


}).listen(3000)