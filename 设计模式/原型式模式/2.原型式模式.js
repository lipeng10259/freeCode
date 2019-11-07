// 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法

// 图片轮播
var LoopImages = function (imageArr , container) {

    this.imagesArray = imageArr ;// 轮播图片数组

    this.container = container ;// 轮播图片容器

};

LoopImages.prototype = {

    createImage : function () {},// 创建轮播图片

    changeImage : function () {}// 切换下一张图片

}

// 上下滑动切换

var SliderLoopImg = function (imgArr , container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this , imgArr , container);

};

SliderLoopImg.prototype = new LoopImages();

SliderLoopImg.prototype.changeImage = function () {

        console.log('sliderLoopImg changeImage function')

}
//渐隐渐现切换类
var FadeLoopImg = function (imgArr , container , arrow){

    LoopImages.call(this , imgArr , container);

    //切换箭头私有变量

    this.arrow = arrow;

};

FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage function')
}

var fadeImg = new FadeLoopImg(['0.png','1.png'],'slide',['left.png','right.png']);

fadeImg.changeImage();