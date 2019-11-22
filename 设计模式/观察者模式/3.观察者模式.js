
// 学生类
var  Student = function (result){
    var that = this;
    // 学生回答为题
    that.result = result;
    // 学生回答问题动作
    that.say = function () {
        console.log(that.result);
    }
};
// 回答问题方法
Student.prototype.answer = function (question) {
    // 注册参数问题
    Observer.regist(question , this.say)
}
// 学生呼呼睡觉，此时不能回答问题
Student.prototype.sleep = function (question) {
    console.log(this.result + ' ' + question + ' 已被注销')
    // 取消对老师的监听
    Observer.remove(question , this.say);
}
//教师类
var Teacher = function () {};
// 教师提问问题的方法
Teacher.prototype.ask = function (question) {
    console.log('问题是：' + question);
    Observer.fire(question)
}

var Student1 = new Student('学生1回答问题');
var Student2 = new Student('学生2回答问题');
var Student3 = new Student('学生3回答问题');

Student1.answer('什么是设计模式1');

Student2.answer('什么是设计模式2');

Student3.answer('什么是设计模式3');

var teacher = new Teacher();

teacher.ask('什么是设计模式1')