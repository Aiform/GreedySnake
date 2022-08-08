import Food  from './Food'
import scorePan from './scorePan'
import Snake from './Snake'

class GameContr{
        Food:Food
        scorePan:scorePan
        Snake:Snake
        direction:string = ''
        ailive:boolean = true
    constructor(){
        this.Food = new Food()
        this.scorePan = new scorePan()
        this.Snake = new Snake()
        this.init()
    }
  
    init(){
        document.addEventListener('keydown',this.gameHeaderl.bind(this))
        this.run()
    }
    gameHeaderl(event:KeyboardEvent){
        this.direction = event.key
    }
    run(){
        let X = this.Snake.x;
        let Y = this.Snake.y;
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10    
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10    
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10    
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10    
                break;
        }
        this.chankEat(X,Y)
        try {
            this.Snake.x = X
            this.Snake.y = Y
        } catch (error:any) {
            alert(error.message)
            this.ailive = false
        } 
         this.ailive && setTimeout(this.run.bind(this),300-(this.scorePan.level - 1) * 30)

    }
    chankEat(X:number , Y:number){
            if(X === this.Food.x && Y === this.Food.y){
                    this.Food.change()
                    this.scorePan.addScore()
                    this.Snake.addBody()
            }
    }
}
export default GameContr