// 参与者模式 在特定的作用域中执行给定的导函数，并将参数原封不动的传递


// 事件绑定方法  

var A = {};
A.on = function ( dom , type , fn){

    if(dom.addEventListener){
        dom.addEventListener(type ,fn,false)
    } else if (dom.attachEvent) {
        dom.attachEvent('on',type,fn);
    } else {
        dom['on'+type] = fn;
    }

}

var btn = document.getElementsByTagName('button')[0];
var p = document.getElementsByTagName('p')[0];

function demoFn(){
    console.log(arguments,this)
}


function bind (fn ,context) {
    // 闭包返回新函数
    return function () {
        return fn.apply(context , arguments);
    }
}


// var bindFn = bind(demoFn);
var bindFn = bind(demoFn,btn)
A.on(btn,'click',bindFn);




