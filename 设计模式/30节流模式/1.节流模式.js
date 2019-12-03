// 节流模式  对重复的业务路基进行节流控制，执行最后一次操作并取消其他操作，以提高性能 （屏蔽重复的事情，只执行一次）


// 节流器

var  throttle = function () {
    // 获取第一个参数

    var isClear = arguments[0],fn;
    // 如果第一个参数是 boolean 类型，那么第一个参数则表示是否清楚计时器

    if(typeof isClear === 'boolean') {
        // 第二个参数则为函数
        fn = arguments[1];
        // 函数的计时器句柄存在，这清楚该计时器
        fn._throttleID && clearTimeout(fn._throttleID);
        // 通过计算器延迟函数的执行
    } else {
        // 第一个参数为函数
        fn = isClear;
        // 第二个参数为函数执行时的参数
        param = arguments[1];
        // 对执行时的参数适配默认值
    }
}