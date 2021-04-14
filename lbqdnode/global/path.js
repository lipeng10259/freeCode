
console.log(__dirname) // 获取执行文件时该文件在文件系统中所在的目录

console.log(__filename)

console.log(process.cwd())

// G:\web\test\freeCode\lbqdnode\global
// G:\web\test\freeCode\lbqdnode\global\path.js
// G:\web\test\freeCode\lbqdnode\global

process.exit(1) // 退出命令 不执行下面

console.log(process.env)