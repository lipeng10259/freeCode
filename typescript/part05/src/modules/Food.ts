// 定义食物类 

class Food {
    element:HTMLElement
    constructor () {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!
    }
    // 获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }

    // 获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop
    }
    // 修改食物的位置
    change(){
        // 生成食物的位置 
        // 食物的位置最小是 0 最大是 290
        // 蛇一次移动一格的大小是 10

        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        
        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
}


export default Food