// 委托模式 多个对象接收并处理同一个请求，他们将请求委托给另一个对同意处理请求


function g(id) {
    let dom = document.getElementById(id);
    return dom;
}

g('wrap').onclick = function (e) {
    var target = e&&e.target || window.event.srcElement;    
    target.innerHTML = target.id
}