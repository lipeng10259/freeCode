(function () {
    console.log('普通接口类型');
    function printLabel(labelleObj) {
        console.log(labelleObj.label);
    }
    let myObj = { size: 10, color: 'white', label: 'size 10 Object' };
    printLabel(myObj);
    printLabel({ label: 'hello', color: '111' });
    console.log('只读接口类型');
    let objPoint = {
        x: 'x',
        y: 'y'
    };
    // objPoint.x = 'z'
    let a = [1, 2, 3, 4, 5];
    let ro = a;
    // ro[0] = 2 // error!
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error!
    let b;
    a = ro;
    console.log(a);
    a.push(12);
    console.log(a);
    console.log('函数接口类型');
    let mySearch = function (data, sub) {
        return data.search(sub) > -1;
    };
    console.log(mySearch('string', 's'));
    console.log('可索引接口类型');
    let myArr;
    myArr = ['1', '2', '3', '4', '5'];
    console.log(myArr[1]);
    class Animal {
    }
    class Dog extends Animal {
    }
    let NumberObj = { length: 1, name: 2 };
    console.log(NumberObj['length']);
    console.log(NumberObj.length);
    console.log(NumberObj.name);
    console.log(NumberObj['name']);
    console.log('类接口类型');
    class Clock {
        constructor() {
        }
        setDate(d) {
            this.currentTime = d;
        }
    }
    let clock = new Clock();
    clock.setDate(new Date());
    console.log(clock.currentTime);
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    class DigitalClock {
        constructor(h, m) { }
        tick() {
            console.log('beep beep');
        }
    }
    class AnalogClock {
        constructor(h, m) { }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    console.log('继承接口');
    let square = {};
    square.color = 'BLUE';
    square.sideLength = 3;
    let square1;
    square.sideLength = 1;
    square.color = 'orange';
    console.log('混合类型');
    function getCounter() {
        let counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
    console.log('接口继承类');
    class Control {
        constructor(state, stateVal) {
            this.state = state;
            this.stateVal = stateVal;
        }
    }
    class Button extends Control {
        constructor() {
            super('state', 'stateVal');
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
})();
