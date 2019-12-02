// 数组迭代
var eachArray = function (arr , fn) {
    var i = 0,
    len=arr.length;
    // 遍历数组
    for(;i < len; i++) {
        // 依次执行回调函数，注意回调函数中传入的参数第一个为索引，第二个为改索引对应的值
        if(fn.call(arr[i],i,arr[i])===false){
            break;
        }
    }
};

// 对象迭代器
var eachObject = function (obj , fn){
    // 遍历对象中的每一个属性
    for(var i in obj){
        // 依次执行回调函数，注意回调函数中传入的参数第一个为属性，第二个为该属性对应的值
        if(fn.call(obj[i],i,obj[i]) === false) {
            break;
        }
    }
};
 
var arr = [0,1,2,3,4,5];

eachArray(arr, function(arr , i , item) {

    console.log(arr + '---'+i+'---'+item);

});



// 同步变量

var A = {
    // 所有用户共有
    common : {},
    // 客户端数据
    client : {
        user : {
            username : '雨夜清河',
            uid : '123'
        }
    },
    // 服务器端数据
    server : {}
};

// 同步变量迭代取值器

var AGetter = function (key) {
    // 如果不存在A则返回未定义
    if(!A)
        return undefined;
    var result = A; //获取同步变量A 对象
    key = key.split('.'); // 解析属性层次序列
    //迭代同步变量A对象属性
    for(var i = 0, len = key.length; i<len;i++){
        // 如果第i层属性存在对应的值则迭代该属性值
        if (result[key[i]] != undefined) {
            result = result[key[i]];
            // 如果不存在则返回未定义
        }else{
            return undefined
        }
    }
    // 返回获取的结果
    return result;
}

// 同步变量迭代赋值器

ASetter = function(key , val) {
    // 如果不存在A则返回未定义
    if(!A){
        return false;
    }
    var result = A;// 获取同步变量A对象
    key = key.split('.');// 解析属性层次序列
    // 迭代同步变量A对象属性
    for(var i = 0,len = key.length;i<len - 1;i++) {
        // 如果第i层属性对应的值不存在，则定义为对象
        if(result[key[i]] === undefined) {
            result[key[i]] = {};
        }
        // 如果第i层对应的值不是对象的一个实例，则抛出错误
        if(!(result[key[i]] instanceof Object)){
            throw new Error ('A.' + key.splice(0,i+1).join('.'+ 'is not object'));
            return false;
        }
        // 迭代该层属性值
        result = result[key[i]];
    }
    // 返回设置成功的属性值
    return result[key[i]] = val;
}

console.log(AGetter('client.user.username'))
console.log(ASetter('client.user.sex','girl'))