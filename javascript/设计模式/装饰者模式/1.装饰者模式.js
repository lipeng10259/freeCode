//装饰者模式：在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）是原有对象可以满足的用户更复杂需求

输入框元素

var telInput = document.getElementById('tel_input');

输入格式提示文案

var telWarnText = document.getElementById('tel_warn_text');

点击输入框显示输入框输入格式提示文案

input.onclick = function(){
    telWarnText.style.display = 'inline-block';
}

添加新的需求


输入框元素

var telInput = document.getElementById('tel_input');

输入格式提示文案

var telWarnText = document.getElementById('tel_warn_text');

输入框提示输入文案

var telDemoText = document.getElementById('tel_demo_text');

点击输入框显示输入框输入格式提示文案并隐藏输入提示文案

input.onclick = function(){
    
    telWarnText.style.display = 'inline-block';

    telDemoText.style.display = 'none' // 新添加功能

};





