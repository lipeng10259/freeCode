// 惰性模式 :减少每次代码执行时的重复性的分支判断，通过对对象重定义来屏蔽原对象的中的分支判断


// 单体模式定义命名空间 

var A = {};
// 添加绑定事件方法 on

A.on = function (dom , type , fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type , fn , false)
    } else if(dom.attachEvent) {
        dom.attachEvent('on' + type , fn);
    } else {
        dom['on' + type] = fn;
    }
}

// 每次跟元素添加事件都会执行类型检测