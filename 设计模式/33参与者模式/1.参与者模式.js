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

function bind (fn ,context) {
    // 闭包返回新函数
    return function () {
        return fn.apply(context , arguments);
    }
}

var demoObj = {
    title:'这是一个例子'
};

function demoFn () {
    console.log(this.title);
}

var bindFn = bind(demoFn , demoObj);

bindFn();