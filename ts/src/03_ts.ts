
(function (){

    console.log('普通接口类型')
    interface LabeledValue {
        label: string,
        color: string
    }

    function printLabel(labelleObj:LabeledValue) {
        console.log(labelleObj.label)
    }

    let myObj = {size:10,color:'white',label:'size 10 Object'}

    printLabel(myObj)

    printLabel({label:'hello',color:'111'})

    console.log('只读接口类型')

    interface Point {
        readonly x:string,
        readonly y:string
    }

    let objPoint:Point = {
        x:'x',
        y:'y'
    }

    // objPoint.x = 'z'


    let a:number[] = [1,2,3,4,5]

    let ro:ReadonlyArray<number> = a

    // ro[0] = 2 // error!
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error!

    let b:number[];

    a = ro as number[];

    console.log(a)

    a.push(12)

    
    console.log(a)

    console.log('函数接口类型')

    interface SearchFunc {
        (source:string,subString:string):boolean
    }

    let mySearch:SearchFunc = function (data,sub) {
           return data.search(sub) > -1
    }

    console.log(mySearch('string','s'))

    console.log('可索引接口类型')

    interface StringArray {
        [index:number] : string
    }

    let myArr:StringArray;
    
    myArr = ['1','2','3','4','5']

    console.log(myArr[1])


    class Animal {
        name:string
    }

    class Dog extends Animal {
        breed: string
    }

    // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
    // interface Notkay {
    //     [x:number]:Animal,
    //     [x:string]:Dog
    // }

    interface Notkay {
        [x:number]: Dog,
        [x:string]: Animal
    }


    interface NumberDictionary {
        [index: string]: number;
        length: number;    // 可以，length是number类型
        name: number       // 错误，`name`的类型与索引类型返回值的类型不匹配
      }

      let NumberObj:NumberDictionary = {length:1,name:2}

      console.log(NumberObj['length'])
      console.log(NumberObj.length)
      console.log(NumberObj.name)
      console.log(NumberObj['name'])


    console.log('类接口类型')

    interface ClockInterface {
        currentTime:Date
        setDate:(d:Date) => void
        
    }

    class Clock implements ClockInterface {
        currentTime:Date
        constructor(){
   
        }

        setDate(d:Date){
            this.currentTime = d
        }
    }

    let clock = new Clock()

        clock.setDate(new Date())

    console.log(clock.currentTime)


    // interface ClockConstructor {
    //     new (hour: number, minute: number);
    // }
    
    // class ClockCon implements ClockConstructor {
    //     currentTime: Date;
    //     constructor(h: number, m: number) { }   
    // }


    interface ClockConstructor {
        new (hour:number, minute: number):ClockConInterface
    }

    interface ClockConInterface {
        tick()
    }

    function createClock (ctor:ClockConstructor ,hour:number , minute:number): ClockConInterface {
        return new ctor(hour , minute)
    }

    class DigitalClock implements ClockConInterface {
        
        constructor (h:number , m:number) {}
        tick () {
            console.log('beep beep')
        }
    }


    class AnalogClock implements ClockConInterface {

        constructor(h: number, m: number) { }

        tick() {

            console.log("tick tock");

        }
    }


    let digital = createClock(DigitalClock, 12, 17);

    let analog = createClock(AnalogClock, 7, 32);

    console.log('继承接口')

    interface Shape {
        color:string
    }

    interface Square extends Shape {
        sideLength : number
    }

    let square = <Square>{};

    square.color = 'BLUE'
    
    square.sideLength = 3

    let square1:Square;

    square.sideLength = 1

    square.color = 'orange'


    console.log('混合类型')
        interface Counter {
            (start: number): string;
            interval: number;
            reset(): void;
        }
        
        function getCounter(): Counter {
            let counter = <Counter>function (start: number) { };
            counter.interval = 123;
            counter.reset = function () { };
            return counter;
        }
        
        let c = getCounter();
        c(10);
        c.reset();
        c.interval = 5.0;


    console.log('接口继承类')

        class Control {

            private state: any;

            protected stateVal:string

            constructor(state,stateVal){
 
                this.state = state

                this.stateVal = stateVal

            }
        }

        interface SelectableControl extends Control {
            select(): void;
        }
        
        class Button extends Control implements SelectableControl {
            constructor(){
                super('state','stateVal')
            }
            select() { }
        }
        
        class TextBox extends Control {
            select() { }
        }
        
        // 错误：“Image”类型缺少“state”属性。
        // class Image implements SelectableControl {

        //     select() { }

      
        // }

   
        




    
})()