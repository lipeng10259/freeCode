var Flyweight = function () {
    // 已创建的元素
    var created = [];
    // 创建一个新闻包装容器
    function create () {
        var dom = document.createElement('div');
        // 将容器插入新闻列表容器中
        document.getElementById('container').appendChild(dom);
        // 缓存新创建的元素
        created.push(dom);
        // 返回创建的新元素
        return dom;
    }

}