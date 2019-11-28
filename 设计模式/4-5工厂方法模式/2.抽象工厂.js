// 抽象工厂 通过对类的工厂抽象使用业务用于对产品类簇的创新，而不负责创建某一类产品的实例

var VehicleFactory = function (subType , superType) {

    if(typeof VehicleFactory[superType] === 'function') {

        function F () {};

        F.prototype = new VehicleFactory[superType]();

        subType.constructor = subType;

        subType.prototype = new F();

    } else {
        throw Error ('未创建该抽象类');
    }

}

VehicleFactory.Car = function () {

    this.type = 'Car';

};

VehicleFactory.Car.prototype = {
    getPrice : function () {
        return new Error('抽象类不能调用');
    },
    getSpeed : function () {
        return new Error('抽象类不能调用');
    }
};

VehicleFactory.Bus = function () {

    this.type = 'Bus';

};

VehicleFactory.Bus.prototype = {
    getPrice : function () {
        return new Error('抽象类不能调用');
    },
    getSpeed : function () {
        return new Error('抽象类不能调用');
    }
};

var BMW = function (price , speed) {

    this.price = price;

    this.speed = speed;

};

VehicleFactory(BMW,'Car');

BMW.prototype.getPrice = function () {

    return this.price;

};

BMW.prototype.getSpeed = function () {
    return this.speed;
}

var bmw = new BMW(100 , 2000);

console.log(bmw.getPrice())