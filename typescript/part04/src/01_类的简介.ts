
class Person {
    // 定义属性 直接定义的属性是实例属性，需要通过对象的实例去访问
    name:string = '猴哥'
    age:number = 16
    // 在属性前面使用static 关键字可以定义类属性(静态属性)
    static sex:string = 'nan'
    // readonly  属性只读，无法修改
    readonly like:string = 'sing'

    // 定义方法  
    sayHello () {
        console.log(this.name + '你好！')
    }
    // 方法前面加static 则是类的方法，可以直接通过类去调用

}

const person = new Person()

console.log(person,person.name)

person.sayHello()
// person.like = 'speak'