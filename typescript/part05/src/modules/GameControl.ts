
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {

    // 定义蛇的类
    snake:Snake
    
    // 定义食物的类
    food:Food
    
    // 定义积分的类
    scorePanel:ScorePanel
    // 创建一个属性来存储蛇的移动方向   ArrowUp Up ArrowDown Down ArrowRight Right ArrowLeft Left 
    direction:string = ''
    isLive:boolean = true

    constructor () {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    init () {
        console.log(1);
        
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    keydownHandler (event:KeyboardEvent) {
        console.log(event);
        
        this.direction = event.key
    }   


    run () {
        
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "Up": 
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
                Y += 10
                break
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X+=10
                break;
        }

        if(this.checkEat(X,Y)) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
  
        try {
            this.snake.X = X
            this.snake.Y = Y   
             
        } catch (error) {
            alert(error.message + 'GAME OVER!')
            this.isLive = false
        }


        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level -1) * 30)

    }

    // 定义蛇是否吃到食物方法

    checkEat (X:number,Y:number) {        
        return X === this.food.X && Y === this.food.Y
    }

}


export default GameControl
