
// 接 1.装饰者模式.js 优化 

var decorator = function (input , fn){

    // 获取事件源

    var input = document.getElementById(input);

    if(typeof input.onclick === 'function') {

        // 缓存事件源原有函数

        var oldClickFn = input.onclick;

        // 为事件源定义新的函数

        input.onclick = function () {
            // 事件源原有回调函数

            oldClickFn();
            // 执行事件源新增回调函数
            fn()

        }

    } else {
        // 事件源未绑定事件，直接为事件源添加新增回调函数

        input.onclick = fn;
    }
    // 做其他事情
};

decorator('tel_input', function () {
    document.getElementById('tel_demo_text').style.display = 'none';
})