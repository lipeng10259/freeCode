

function curry () {
    // 缓存数组 slice 方法 Array.prototype.slice
    var  Slice = [].slice
    // 从第二个参数开始截图参数 
    var args = Slice.call(arguments,1);
    // 闭包返回新函数
    return function () {
        // 将参数（类数组） 转为数组
        var addArgs = Slice.call(arguments),
        // 拼接参数
        allArgs = args.concat(addArgs);
        // 返回新函数
        return fn.apply(null , allArgs);
    }
};

function add(num1 , num2){
    return num1 + num2;
}

function add5 (num) {
    return add(5 , num)
}

console.log(add(1,2))
console.log(add5(6))
var add5_1 = curry(add,5)
add5_1(7);

add7_8 = curry(add , 7,8)


// 重构bind


function bind (fn ,context) {
    // 缓存数组 slice 方法 Array.prototype.slice
    var  Slice = Array.prototype.slice
    // 从第二个参数开始截图参数 
    var args = Slice.call(arguments,2);
    // 闭包返回新函数
    return function () {
        // 将参数（类数组） 转为数组
        var addArgs = Slice.call(arguments),
        // 拼接参数
        allArgs = args.concat(addArgs);
        // 返回新函数
        return fn.apply(context , allArgs);
    }   
}
