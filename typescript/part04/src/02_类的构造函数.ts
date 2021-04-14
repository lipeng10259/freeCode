
class Dog {
    name:string
    age:number
    // constructor 被称为构造函数 
    // 构造函数在对象创建时调用
    constructor (name:string,age:number) {
        // 在实例方法中，this 就是表示当前的实例
        // 在构造函数中当前对象就是单签新建的那个对象
        // 可以通过this向新建对象中添加属性
        this.name = name;
        this.age = age
    }

    bark () {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}


const dog = new Dog('旺财',1)
const dog1 = new Dog('旺财1',1.5)

console.log(dog,dog.age)
