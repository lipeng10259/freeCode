var b = {
    a: '12654',
    b: '2'
}

// 拿到被加载文件模块导出的接口对象

// 使用 exports 默认的

function sum ( x , y ) {

    return x + y;

}

exports.data = b ; 
exports.sum = sum ; 