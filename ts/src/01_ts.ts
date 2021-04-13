// // const x:[string,number] = ['hello',123]

// // console.log(x[0])
// // console.log(x[1])

// // enum Color {Red, Green, Blue}
// // let c: Color = Color.Green;

// // console.log(c)

// // let u: undefined = undefined;
// // let n: null = null;

// // function error ():never  {
// //     throw new Error('ddd')
// // }

// // function infiniteLoop(): never {

// //     return error();

// // }


// // function alertT(): void {

// //     alert('1')

// // }

// enum ShapeKind1 {
//     Circle,
//     Square
//   }



// interface Circle {
//     kind: ShapeKind1.Circle // 使用 ShapeKind.Circle 作为类型，指定接口须有 kind 字段，且类型为 ShapeKind.Circle
//     radius: number
//   }
  
//   interface Square {
//     kind: ShapeKind1.Square // 同上
//     sideLength: number
//   }
  
//   let c1: Circle = {
//     kind:12, // Error! 因为接口 Circle 的 kind 被指定为 ShapeKind.Circle类型，所以这里会报错
//     radius: 100
//   }


//   let someValue1:any = "this is a string";

// let strLength1:number = (<String>someValue1).length;



// function func() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }

// var g = func();
// console.log(g()) // returns 11;


// function theCityThatAlwaysSleeps() {
//   let getCity;

//   if (true) {
//       let city = "Seattle";
//       getCity = function() {
//           return city;
//       }
//   }

//   return getCity();
// }

// console.log(theCityThatAlwaysSleeps())


// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];

// bothPlus.push(12)

// console.log(first,second,bothPlus)


// function printLabel(labelledObj: { label: string }) {

//   console.log(labelledObj.label);


// }

// let myObj = { size: 10, label: "Size 10 Object" };

// printLabel(myObj);


// interface LabelledValue {
//   label: string;
// }

// function printLabel1(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj1 = {size: 10, label: "Size 10 Object"};
// printLabel1(myObj);


// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
  
//   return 
// }

// let mySquare = createSquare({color:'1',width:1,ac:'12'} as SquareConfig);
// let myObj2 = {colour:'1',width:1}
// let mySquare1 = createSquare({...myObj2});
// let mySquare2 = createSquare({color:'1',width:1});


// interface searchFunc {
//   (source:string,subString:string):boolean
// }

// let searchF:searchFunc = function (src:string,sub:string):boolean {

//   let res = src.search(sub)

//   return res > -1 

// }


// interface StringArray {
//   [index:number]:string
// }

// let myArray =<StringArray>['Bob','Fred'];

// let myStr = myArray[0]
// console.log(myStr)

// // class Animal {
// //   name: string;
// // }
// // class Dog extends Animal {
// //   breed: string;
// // }

// // // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// // interface NotOkay {
// //   [x: number]: Animal;
// //   [x: string]: Dog;
// // }


// // interface ClockInterface {
// //   currentTime: Date;
// // }

// // class Clock implements ClockInterface {
// //   currentTime: Date;
// //   static _say ():void {
// //     console.log(1)
// //   }
// //   say ():void {
// //     console.log(1)
// //   }
// //   constructor(h: number, m: number) { 

// //   }

// //   setTime (d:Date) {
// //     this.currentTime = d 
// //   }
// // }

// // let clock_1 = new Clock(1,2)

// // clock_1.setTime(new Date())
// // console.log(clock_1.currentTime)
// // console.log(clock_1._say())
// // console.log(clock_1.say())

// // class click_2 extends Clock {
 
// // }

// // console.log(clock_1)



// // interface ClockConstructor {
// //   new (hour: number, minute: number);
// // }

// // class Clock1 implements ClockConstructor {
// //   currentTime: Date;
// //   constructor(h: number, m: number) { }
// // }


// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);



// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;


// interface Counter {
//   (start:number):string
//   interval:number
//   reset():void
// }

// function getCounter():Counter {

//   let counter =<Counter>function (start:number) {

//   }
//   counter.interval = 10

//   counter.reset = function () {}

//   return counter
// }

// let couter = getCounter()



// interface Shape {
//   color: string;
// }

// interface PenStroke {
//   penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }

// let square2 = <Square>{};
// square2.color = "blue";
// square2.sideLength = 10;
// square2.penWidth = 5.0;


// interface myInter {
//   name:string;
//   age:number;
// }

// let myInter1:myInter = {
//   name:'1',
//   age:2
// }

// let myInter2 = <myInter>{}

// myInter1.name = '12'
// myInter1.age = 12


interface myObj {
  name:string,
  age:number
}

let obj:myObj;

obj.name = '1'
obj.age = 1

let str:string = '1'


