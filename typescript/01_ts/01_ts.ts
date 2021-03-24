console.log('hello ts')

let a: number;
a  = 19;
a = 20;
let b:string = 'ddd';
let c:Boolean = false;

function sum (a:number, b:number):number {
    return a + b;
}

let d:number = sum(1,2);
console.log(d)

let obj1:{name:string,age?:number};

obj1 = {name:'li',age:11}

console.log(obj1)

let obj2:{name:string,[propName:string]:any}

obj2 = {name:'klui',age : 12,sex : 'nan'}
obj2.name = 'li'

console.log(obj2)


let  func:(a:number,b:number)=>number

func = (a,b):number=>{
    return a + b;
}

console.log(func(19,10))

let arr1:string[] // 字符串数组


let arr2:number[]// 数字数组

let arr3:Array<string>

arr3 = ['1','2']


// 元组，固定长度的数组  语法 [类型，类型]

let h:[string,string]

h = ['1','2']


// 枚举 

enum Gender {
    male = 0,
    female = 1
}

let i:{name:string,gender:Gender};

i = {name:'li',gender:Gender.male}

console.log(i.gender === Gender.male)

// & 表示同时
let j :{name:string}&{age:number}
j = {name:'li',age:19}

// | 表示或 

let k : string|number;

k = 'li'
k = 10

// 类型别名 

type myType = 1|2|3|4|5|6

let l:myType

l = 1
l = 2
l = 3
l = 4
l = 6

type myType1 = string

let m:myType1

m = 'li'


