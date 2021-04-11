/**
 * 在定义函数或类时，如果遇到类型不明确就可以使用泛型
 * 
 * 
*/

function fn<T>(a:T): T{
    return a
}


// 可以直接使用具有泛型的函数

let result = fn(10) // 不指定泛型，ts 可以自动对类型进行推断

let result2 = fn<string>('hello') // 指定泛型

function fn2<T,K>(a:T,b:K):T{
    return a
}

console.log(fn2<number,string>(123,'hello'))


interface Inter {
    length:number
}

function fn3<T extends Inter>(a:T){
    return a.length
}

console.log(fn3({length:10}));

class MyClass <T> {
    name:T;
    constructor(name:T) {
        this.name = name
    }

}

const mc = new MyClass<string>('hello')
 