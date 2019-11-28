// 桥接模式：在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦


var spans = document.getElementsByTagName('span');

spans[0].onmouseover = function () {
    this.style.color = 'red';
    this.style.background = '#ddd';
}

spans[0].onmouseout = function () {
    this.style.color = '#333';
    this.style.background = '#f5f5f5';
}

spans[1].onmouseout = function () {
    this.getElementsByTagName['stong'][0].style.color = 'red';
    this.getElementsByTagName['stong'][0].style.background = '#ddd';
}

spans[1].onmouseout = function () {
    this.getElementsByTagName['stong'][0].style.color = 'red';
    this.getElementsByTagName['stong'][0].style.background = '#ddd';
}


// 抽取公共

function changeColor (dom , color , bg) {

    // 设置字体颜色

    dom.style.color = color

    // 设置元素的背景颜色

    dom.style.background = bg;

}


spans[0].onmouseover = function () {
    this.changeColor(this , 'red' , '#ddd')
}

spans[0].onmouseout = function () {
    this.changeColor(this , '#333' , '#f5f5f5')
}
