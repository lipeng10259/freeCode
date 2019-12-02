
function createBook(name , time , type) {

    var o = new Object();

    o.name = name;
    
    o.time = time;

    o.type = type;

    o.getName = function () {
    
        console.log(this.name);

    };

    return o;

};

var book1 = createBook('js book' , 2018, 'js');

book1.getName();


function createPop(type , text){

    var o = new Object();

    o.content = text;

    o.show = function () {
        //显示方法
    };

    if(type == 'alert') {

        // 警示框差异部分

    }

    if(type == 'prompt') {

        // 提示框差异部分

    }

    
    if(type == 'confirm') {

        // 确认框差异部分

    }

    return o;

    
}

var userNameAlert = createPop('alert' , '用户名只能是26个字母和数字');

// 1 简单工厂中是通过类的实例化对象创建 （通过类的创建可以继承父类原型上面的方法，可以共用）
// 2 工厂模式中 是通过创建一个新对象然后包装增强其属性和方法来实现（次方法通过类似寄生方式创建的对象是一个新的个体，所以他们的方法不能共用）

// 选择哪种工厂方式来实现你的需求还要看你是如何分析你的需求