// 装饰者模式：在不改变原对象的基础上，通过对其进行包装拓展（添加属性和方法）使原有对象可以满足用户的复杂需求

// 输入框元素
var telInput = document.getElementById('tel_input');

// 输入个是提示文案

var telWarnText = document.getElementById('tel_warn_text');

// 点击输入框显示输入框输入格式提示文案

input.onclick= function () {

    telWarnText.style.display = 'inline-block';

}

// 修改过的代码

// 输入框元素

var telInput = document.getElementById('tel_input');

// 输入框输入格式提示文案

var telWarnText = document.getElementById('tel_warn_text');

// 输入框提示输入文案

var telDomeText = document.getElementById('tel_demo_text');

// 点击输入框显示输入个是提示文案并隐藏输入提示文案

input.onclick = function () {
    telWarnText.style.display ='inline-block';
    telDomeText.style.display = 'none';
}


/**********优化修改***********/
// 装饰者
var decorator = function(input , fn) {

    var input = document.getElementById(input);

    if(typeof input.onclick === 'function') {
        // 缓存事件原有原函数
        var oldClickFn = input.onclick;
        // 为事件定义新的事件
        input.onclick = function () {
            // 事件原有回调函数
            oldClickFn();
            // 执行事件新增回调函数
            fn()
        }

    }else {
        // 事件未绑定事件，直接为事件添加新增回调函数
        input.onclick = fn;
    }

}


decorator('tel_input' , function (){
    document.getElementById('tel_demo_text').style.display = 'none';
})