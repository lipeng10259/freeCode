// 观察者模式,又被称为发布-订阅者模式或者消息机制，定义了一种依赖关系，解决了主体对象与观察者之间功能的耦合；


var Observer = (function(){
    // 防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存

    var _messages = {};

    return {
        // 注册信息接口
        regist : function (type , fn){
            // 如果此消息不存在应该创建就一个该消息类型
            if(typeof _messages[type]==='undefined'){
                // 将动作推入到该消息对应的动作
                _messages[type] =[fn];
                // 如果存在
            } else {
                // 将动作方法推入该消息对应的动作执行序列中
                _messages[type].push(fn)
            }
            return this;
        },
        // 发布信息接口
        fire : function (type,args) {
            // 如果该消息没有被注册，则返回
            if(!_messages[type])
                return
            // 定义消息信息
            var events = {
                type:type,
                args : args || {}
            },
            i = 0,
            len = _messages[type].length;
            // 遍历消息动作
            for(;i<len;i++){
                // 依次执行注册的消息对应的动作序列
                _messages[type][i].call(this,events);
            }
        },
        // 移除信息接口
        remove : function (){
            // 如果消息动作队列存在
            if(_messages[type] instanceof Array){
                // 从最后一个消息动作遍历
                var i = _messages[type].length - 1;
                for(;i>=0;i--){
                    // 如果存在该动作则在消息动作序列中移动响应动作
                    _messages[type][i] === fn && _messages[type].splice(i ,1);
                }
            }
        }
    }

})()


// Observer.regist('test' , function (e){
//     console.log(e.type , e.args.msg)
// });


// Observer.fire('test' ,{msg:'传递参数'});