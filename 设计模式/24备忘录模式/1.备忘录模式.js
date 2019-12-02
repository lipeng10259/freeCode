// 备忘录模式 在不破坏对象封装的前提下，在对象之外捕获并保存该对象那个内部的状态一遍日后对象使用或者对象那个恢复到以前的某个状态

// Page 备忘录 

var Page = function () {
    // 信息缓存对象
    var cache = {};
    // 主函数参数 page 页码 参数fn 成功回调函数
    return function (page , fn) {
        // 判断该页面数据是否在缓存中
        if (cache[page]) {
            // 恢复到该页面状态，显示该页内容
            showPage(page , cache[page]);
            // 执行回调函数
            fn && fn();
        } else {
            // 若缓存cache 中午该页面数据
            $.post('./data/getNewsData.php',{
                // 请求携带数据 page 页码
                page : page
            },function (res){
                // 成功回调
                if(res.errNo == 0) {
                    // 显示该页数据
                    showPage(page , res.data);
                    // 将该页数据钟乳缓存中
                    cache[page] = res.data
                    // 执行成功之后回调
                    fn && fn();
                } else {
                    // 处理异常
                }
            })
        }
    }
}()

// 下一页按钮 

$('#next_page').click(function() {
    // 获取新闻内容
    var $news = $('#news_content'),
    // 获取新闻内容元素当前页数据
    page = $news.data('page');
    // 获取并显示新闻
    Page(page , function() {
        // 修正新闻内容元素当前页数据
        $news.data('page' , page + 1);
    })
}) 