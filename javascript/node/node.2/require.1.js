// require 是一个方法 (引入的文件后缀名可以省略)
// 他的作用是用来加载模块

// 在node 中模块有三种 

// 具名的核心模块 例如 fs http

// 用户自己编写的文件模块
// 相对路径必须交 ./

// 在node中没有全局作用域 只有模块作用域  外部访问不到内部 内部也访问不到外部
 



console.log('1')



require('./require.2.js')

console.log('3')

// 模块之间通信 

// require 方法有两个作用 
//1 如上面，加载模块并执行里面的代码

// 拿到被加载文件模块导出的接口对象

// 使用 exports 默认的

var data = require('./require.3')

console.log( data.data.a );
console.log( data.sum(12 , 23 ) );
