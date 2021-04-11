

module.exports = function (opts) {
    
    var time = opts.time || 100;

    return  function ( req , res ,next) {
        
        var timer = setTimeout(function () {
        
            console.log(req.method , req.url)
        
        },time) 

        var end = res.end;
        res.end = function (chunk , encoding) {
            console.log(chunk,encoding)
            res.end = end;
            res.end = (chunk , encoding);
            clearTimeout(timer)
        }

        next();

    }
}