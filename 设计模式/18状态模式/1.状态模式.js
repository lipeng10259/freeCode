// 状态模式 : 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了状态。



// 投票结果状态对象

var ResutlState = function () {
    // 判断保存在在内部状态中
    var Status = {
        // 每种状态作为一种独立方法保存
        status0: function () {
            console.log(0)
        },
        status1 : function () {
            console.log(1)
        },
        status2: function () {
            console.log(2)
        },
        status3: function () {
            console.log(3)
        }
    }
    // 获取某一种状态并执行其对应的方法
    function show (result) {
        Status['status' + result] && Status['status' + result]();
    }

    return {
        show : show
    }
}()

ResutlState.show(2);