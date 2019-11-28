
// 多维运动类


// 运动单元

function Speed(x , y) {

    this.x = x;
    this.y = y;

}

Speed.prototype.run = function () {
    console.log('运动起来');
}

// 着色单元

function Color (cl) {

    this.cl = cl;

};

Color.prototype.draw = function () {
    console.log('绘制色彩');
};

// 变形单元

function Shape (sp) {

    this.shape = sp;

}

Shape.prototype.change = function () {

    console.log('改变形状');

}

// 说话单元

function Speek(wd) {
    this.word = wd;
}

Speek.prototype.say = function () {
    console.log('书写字体');
};


function Ball (x , y , c) {
    // 实现运动单元
    this.speed = new Speed(x , y);
    // 实现着色单元
    this.color = new Color(c);
}

Ball.prototype.init = function (){
    // 实现运动
    this.speed.run();
    // 实现着色
    this.color.draw();
}

var ball = new Ball(10 , 12 , 16);

ball.init()