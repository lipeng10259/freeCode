(function(){

    // 定义一个 Animal 类

    class Animal {
        name:string
        age:number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }

        sayHello () {
            console.log('汪汪汪!')
        }
    }

    /*
        此时 ，Animal被称为父类，Dog 被称为子类
        使用继承后，子类将会拥有父类所有的方法和属性
        通过继承可以将多个类中共有的代码写在一个父类中
            这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
            如果希望在子类中添加一个父类中没有的属性或者方法直接添加即可
        如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法(方法重写)
    
    
    */
    // 定义一个表示狗的类 

    class Dog extends Animal {
        
        sayHello () {
            console.log(`${this.name} 汪汪汪！`)
        }
    }

    class Cat extends Animal {
        sayHello () {
            console.log(`${this.name} 喵喵喵！`)
        }
    }

    const dog = new Dog ('小狗' , 1)
    const cat = new Cat ('小猫' , 1)

    console.log(dog.name)
    console.log(cat.name)
    dog.sayHello()
    cat.sayHello()

})()