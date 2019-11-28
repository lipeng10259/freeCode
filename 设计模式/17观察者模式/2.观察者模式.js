
function $(id) {
    return document.getElementById(id);
}

// 工程师

(function () {
    // 追加一侧信息
    function  addMsgTitem(e){
        var  text = e.args.text,
        ul = $('msg'),
        li = document.createElement('li'),
        span = document.createElement('span');
        li.innerHTML = text;
        // 关闭按钮
        span.onclick = function () {
            ul.removeChild(li);
            // // 关闭按钮
            // span.onclick = function (){
            //     ul.removeChild(li);
                // 发布删除留言信息
            Observer.fire('removeCommentMessage', {
                num :-1
            });
            // }
        }
        // 添加删除按钮
        li.appendChild(span);
        // 添加留言节点
        ul.appendChild(li);
    }
    // 注册添加评论信息
    Observer.regist('addCommentMessage' , addMsgTitem)
})();


(function(){
    //改变用户消息目录
    function changeMsgNum(e){
        // 获取需要增加的用户消息数目
        var num = e.args.num;
        // 增加用户消息数目并写入页面中
      
        $('msg_num').innerHTML = Number($('msg_num').innerHTML) + num;
    }
    // 注册添加评论信息
    Observer
    .regist('addCommentMessage',changeMsgNum)
    .regist('removeCommentMessage',changeMsgNum)

})();


(function () {
    //用户点击提交按钮
    $('user_submit').onclick = function () {
        // 获取用户输入框中输入的信息
        var text = $('user_input');
        // 如果消息为空则提交失败
        if(text.value === '') {
            return ;
        }
        // 发布一侧评论信息
        Observer.fire('addCommentMessage' , {
            text : text.value,
            num : 1
        });
        text.value = '';
    }
})()