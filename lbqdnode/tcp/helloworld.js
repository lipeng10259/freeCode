

require('http').createServer(function (req , res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hello</h1>')
    res.write('<h1>ni hao</h1>')
    setTimeout(()=>{
        res.end('<h1>world</h1>')
    },2000)
   
}).listen(3000)