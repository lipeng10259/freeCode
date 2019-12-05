// 节流模式  对重复的业务路基进行节流控制，执行最后一次操作并取消其他操作，以提高性能 （屏蔽重复的事情，只执行一次）
var  extend = function (target , source) {

    // 遍历源对象中的属性
    for(var property in source) {
        // 将源对象中的属性复制到目标对象中
        target[property] = source[property]
    }

    return target;

}
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
        // 对执行时的参数适配默认值，这里我们用到以前学过的extend 方法
        var p = extend({
            content: null,// 执行函数执行的作用域
            args : [],// 执行函数执行时的相关参数
            time : 300 // 执行函数延迟执行的时间
        },param);
        // 清楚执行函数计时器句柄
        arguments.callee(true , fn);
        // 为执行绑定计时器句柄，延迟执行函数
        fn._throttleID = setTimeout(function () {
            // 执行函数
            fn.apply(p.content , p.args)
      
        },p.time)
    }
}

// function moveScroll(e){

//     console.log(e)
// }

// $(window).on('scroll',function(){
//     throttle(moveScroll)
// })


// param id 延迟加载图片的容器id
 
function LazyLoad (id) {
    // 获取需要节流延迟加载图片的容器
    this.container = document.getElementById(id);
    // 缓存图片
    this.imgs = this.getImgs();
    // 执行逻辑
    this.init();
} 

// 节流延迟加载图片类型原型方法
 
LazyLoad.prototype = {
    // 起始执行逻辑
    init : function (){
        // 加载当前视图图片
        this.update()
        // 绑定事件
        this.bindEvent()
    },
    // 获取延迟加载图片
    getImgs : function (){
        // 新数组容器
        var arr = [];
        // 获取图片
        var imgs = this.container.getElementsByTagName('img');
        // 将获取的图片转化为数组()
        for(var i = 0, len = imgs.length; i < len;i++) {
            arr.push(imgs[i])
        }
        return arr;
    },
    //加载图片
    update:function(){
        // 如果图片都加在完成，返回
        if(!this.imgs.length) {
            return;
        }
        // 获取图片长度
        var i = this.imgs.length;
        // 遍历图片
        for(--i ; i >= 0; i--) {
            console.log(i)
            if (this.shouldShow(i)) {
                // 加载图片
                this.imgs[i].src = this.imgs[i].getAttribute('data-src');
                // 清除缓存中的此图片
                this.imgs.splice(i ,1);
            }
        }
    },
    // 判断图片是否在可是范围内
    shouldShow : function (i) {
        // 获取当前图片
        var img = this.imgs[i],
        // 可视范围内部顶部高度（页面滚动条top值）
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop,// 滚动高度
        // 可视范围内底部高度
        scorllBottom = scrollTop + document.documentElement.clientHeight;// 窗口高度
        // 图片的顶部高度
        imgTop = this.pageY(img),
        // 图片的底部位置
        imgBottom = imgTop + img.offsetHeight;
        // 判断图片是否在可视范围： 图片底部高度大于可视视图顶部高度并且图片底部高度小于可视视图底部高度，或者图片顶部高度大于可视视图顶部高度并且图片顶部高度小于可视视图底部高度
        if(imgBottom > scrollTop && imgBottom < scorllBottom || (imgTop > scrollTop && imgTop < scorllBottom))
        return true;
        // 不满足上面条件
        return false
    },
    //获取元素页面中的纵坐标位置
    pageY : function (element) {
        // 如果元素有父元素
        if(element.offsetParent) {
            // 返回父元素+父元素高度
            return  element.offsetTop + this.pageY(element.offsetParent);
        } else {
            //否则返回元素高度
            return element.offsetTop;
        }
    },
    // 绑定事件
    on : function (element , type , fn) {
        if(element.addEventListener) {
            addEventListener(type , fn , false);
        } else {
            element.attachEvent('on' + type , fn , false)
        }
    },
    // 为窗口绑定resize 事件与scroll 事件
    bindEvent : function () {
        var that = this;
        console.log(that)
        this.on(window , 'resize' , function () {
            // 节流图片更新图片逻辑
            throttle(that.update ,{content:that})
        });
        this.on(window ,'scroll' , function () {
            // 节流处理更新图片逻辑
            throttle(that.update ,{content:that})
        })
    }
}


// console.log(document.documentElement.scrollTop || document.body.scrollTop)

// console.log(document.documentElement.clientHeight)

new LazyLoad('scroll')