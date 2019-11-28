// 命令模式: 将请求与实现解耦并封装成独立对象，从而是不同的请求对客户端的实现参数化

// 命令模式就是将请求模块与实现模块解耦，就是将创建模块的逻辑封装在一个对象里，这个对象提供一个参数化的请求接口，通过调用这个接口并传递一些参数实现
// 调用命令对象内部中的一些方法


// 模块实现模块

var viewCommand = (function(){
    var tpl = {
        // 展示图片结构模块
        product : [
            '<div>',
            '<img src = "{#src#}"/>',
            '<p>{#text#}</p>',
            '</div>'
        ].join(''),
        // 展示模板标题
        title : [
            '<div class = "title">',
                '<div class = "main">',
                    '<h2>{#title#}</h2>',
                    '<p>{#tips#}</p>',
               '</div>',
            '</div>',
        ].join('')
    },
    //格式化字符串缓存字符串
    html = '';

    function formateString(str , obj) {
        // 替换'{#'与'#}'之间的字符串
        return str.replace(/\{#(\w+)#\}/g , function (match, key){
            return obj[key];
        })
    }

    // 方法集合
    var Action = {
        // 创建方法
        create : function (data , view) {
            // 解析数据 如果数据是一个数组
            if(data.length) {
                for(var i= 0, len = data.length;i < len; i++){
                    // 将格式化之后的字符串缓存到htmlzhong
                    html += formateString(tpl[view], data[i]); 
                }
            } else {
                // 直接将格式化字符串缓存到html中
                html += formateString(tpl[view], data)
            }
        },
        // 展示模块
        display : function (container , data , view) {
            // 如果传入数据
            if(data) {
                // 根据给定数据穿件视图
                this.create(data , view)
            }
            document.getElementById(container).innerHTML = html;
            // 展示后清空缓存的字符串
            html = '';
        }
    }
    // 命令接口
    return  function excute (msg) {
        // 解析命令，如果msg.param 不是数组则将其转化为数组（apply 方法要求第二个参数为数组）
        msg.param = Object.prototype.toString.call(msg.param) ==='[object Array]' ? msg.param : [msg.param];
        // Action 内部调用的方法引用this,所以此处为保证作用域this执行传入Action
        Action[msg.conmand].apply(Action , msg.param)
    }
})();

// 产品展示

var productData = [
    {
        src : '1.png',
        text:'绽放的桃花'
    },
    {
        src : '1.png',
        text:'绽放的桃花'
    }
],

// 模块标题数据

titleData = {
    title :'夏日里的一片温馨',
    title :'暖暖的温情带给人们的感受.'
}

// 展示一个标题模块
viewCommand({
    // 参数说明
    command : 'display',
    // 参数说明param1元素容器 param2 标题数据 param3 元素模板 
    param:['title',titleData ,'title']
});

// 创建一个图片模块

viewCommand({
    command :'create',
    param:[{
        src:'1.png',
        text:'迎着朝阳的野菊花'
    },'product']
})

// 创建多张图片

viewCommand({
    command : 'display',
    param:['product',productData ,'product']
});


