
var EventEmitter = require('events').EventEmitter;

var a = new EventEmitter;

a.on('event',function () {
    console.log('event called');
})

setTimeout(()=>{
    a.emit('event');
},1000)