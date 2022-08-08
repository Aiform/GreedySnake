// 计分类
class scorePan{
    scoreNum:HTMLElement
    LevelNum:HTMLElement
    score = 1
    level = 1
    // 分数 和 等级 初始化
    maxScore:number
    maxLeverl:number
    constructor(maxScore:number = 10,maxLeverl:number = 10){
            this.scoreNum = document.querySelector('#scoreNum')!;
            this.LevelNum = document.querySelector('#LevelNum')!;
            this.maxScore = maxScore
            this.maxLeverl = maxLeverl
    }
    // 分数的方法
    addScore(){
        this.scoreNum.innerHTML = ++this.score + '';
        if(this.score % this.maxScore === 0){
            this.addLeverl()
        }
    }
    // 等级的方法
    addLeverl(){
        if(this.level < this.maxLeverl){
            this.LevelNum.innerHTML = ++this.level + '';
        }
    }
}
export default scorePan