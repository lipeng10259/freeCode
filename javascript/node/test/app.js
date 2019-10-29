var  checkobj = function () {}; 

checkobj.prototype.checkname = function (){}

var a = new checkobj();
var b = new checkobj();

console.log(a.checkname == b.checkname)

var obj = {
    a:'1',
    b:'2s'
}

function inheritObject (o) {

    function F(){};

    F.prototype = o;

    return o;

}

console.log(new inheritObject(obj));
