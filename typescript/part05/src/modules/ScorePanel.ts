// 定义计分的类

class ScorePanel {
    score = 0;
    level = 1;

    scoreEle:HTMLElement
    panelEle:HTMLElement

    // 设置一个变量限制等级 
    maxLevel:number
    upScore:number
    
    constructor (maxLevel:number = 0,upScore:number = 10) {
        this.scoreEle = document.getElementById('score_val')!
        this.panelEle = document.getElementById('panel_val')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore () {
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore === 0)
            this.addUp()
    }

    addUp () {
        if(this.level < this.maxLevel)
            this.panelEle.innerHTML = ++this.level + '';
    }
}

export default ScorePanel