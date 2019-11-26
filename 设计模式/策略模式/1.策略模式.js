//策略模式,将定义的一组算法封装起来，使其相互之间可以替换。封装的算法具有一定独立性，不会随客户端的变化而变化



// 价格策略

var PriceStrategy = function () {
    // 内部算法对象
    var stragtegy = {
        //100 返 30
        return30 : function (price) {
            return + price + parseInt(price / 100) * 30;
        },
        return50 : function (price) {
            return + price + parseInt(price / 100) * 50;
        },
        percent90 : function (price) {
            return + price * 100 * 90 / 10000;
        },
        percent80 : function (price) {
            return + price * 100 * 80 / 10000;
        },
        percent50 : function (price) {
            return + price * 100 * 50 / 10000;
        }
    }
    return function (algorithm, price) {
        return stragtegy[algorithm] && stragtegy[algorithm](price)
    }
}();