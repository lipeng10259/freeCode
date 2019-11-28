// 中介者模式 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。有时中介者对象也可以改变对象之间的交互。

// 中介者对象 



var Mediator = function () {
    // 消息队列
    var _msg = {};

    return {
        // 订阅消息方法  参数type 消息名称  参数 action  消息回调函数
        
        register : function (type , action) {
            // 如果消息存在
            if(_msg[type]){
            // 存入回调函数
            _msg[type].push(action);

            }else {
                // 不存在 则简历该消息容器
                _msg[type] = [];
                // 存入新消息回调函数
                _msg[type].push(action);
            }
        },
        // 发布消息方法 参数type 消息名称
        send : function (type) {
            // 如果该消息存在 
            if (_msg[type]) {
                // 遍历已存储的消息回调函数
                for(var i = 0, len = _msg[type].length ; i < len; i++){
                    // 执行该回调函数
                    _msg[type][i] && _msg[type][i]();
                }
            }
        }
    }
}();

// // 单元测试 

// Mediator.register('demo' , function () {
//     console.log('first');
// })

// Mediator.register('demo' , function () {
//     console.log('second');
// })

// Mediator.send('demo');



// 显示导航小组件   参数 mod 模块 参数 tag 处理的标签（消息b 网址用 span） 参数 showOrHide 显示韩式影藏


function showHideNavWidget (mod1,tag,showOrHide) {
    // 获取导航模块
    console.log(mod1)
    var mod = document.getElementById(mod1);
    // 获取下面标签为tag的元素
    
    var tags = mod.getElementsByTagName(tag),
    // 如果设置false或者为 hide 则值为hidden ,否则为visible
    showOrHide = (!showOrHide || showOrHide == 'hide') ? 'hidden' : 'visible';
    // 站位隐藏这些标签
    console.log(tags)
    for(var i = tags.length - 1; i >= 0; i--) {
        tags[i].style.visibility = showOrHide;
    }
};

// 用户收藏导航模块

(function () {
    // 其他交互逻辑
    // 订阅影藏用户收藏导航消息提醒消息
    Mediator.register('hideAllNavNum',function () {
        showHideNavWidget('collection_nav' , 'b' , false)
    });
    // 订阅显示用户收藏导航消息提醒消息
    Mediator.register('showAllNavNum' , function () {
        showHideNavWidget('collection_nav' , 'b' , true)
    })
    // 订阅显示用户收藏导航网址消息
    Mediator.register('hideAllNavUrl' , function () {
        showHideNavWidget('collection_nav' , 'span' , false)
    })
    // 订阅显示用户收藏导航网址消息
    Mediator.register('showAllNavUrl' , function () {
        showHideNavWidget('collection_nav' , 'span' , true)
    })
})();

// 推荐用户导航
(function () {
    // 其他交互逻辑
    // 订阅影藏用户收藏导航消息提醒消息
    Mediator.register('hideAllNavNum',function () {
        showHideNavWidget('recommend_nav' , 'b' , false)
    });

    // 订阅显示用户收藏导航网址消息
    Mediator.register('showAllNavNum' , function () {
        showHideNavWidget('recommend_nav' , 'b' , true)
    })
})();

// 最近常用导航
(function () {
    // 其他交互逻辑
    // 订阅影藏用户收藏导航消息提醒消息
    Mediator.register('hideAllNavUrl',function () {
        showHideNavWidget('recently_nav' , 'span' , 'hide')
    });

    // 订阅显示用户收藏导航网址消息
    Mediator.register('hideAllNavUrl' , function () {
        showHideNavWidget('recently_nav' , 'span' , 'show')
    })
})();


// 发布消息

// 设置层模块

(function () {
    // 消息提示选框
    var hideNum = document.getElementById('hide_num'),
    hideUrl = document.getElementById('hide_url');
    // 消息提醒选框事件
    console.log(hideNum)
    console.log(hideUrl)
    hideNum.onchange = function (){
        // 如果勾选
        console.log('ddd')
        if(hideNum.checked) {
            // 中介者模式发布隐藏消息提醒功能消息
            Mediator.send('hideAllNavNum')
        } else {
            // 中介者发布显示消息提醒功能消息
            Mediator.send('showAllNavNum');
        }
    }
    // 网址选框事件
    hideUrl.onchange = function () {
        // 如果勾选
        if(hideUrl.checked) {
            // 中介者发布隐藏所有网址功能消息
            Mediator.send('hideAllNavUrl');
        } else {
            //中介者发布显示所有网址功能信息
            Mediator.send('showAllNavUrl');
        }
    }
})();
