// 食物类
class Food{
    foot:HTMLElement;
    constructor(){
        this.foot = document.getElementById('food')!;
    }
    get x(){
        return this.foot.offsetLeft
    }
    get y(){
        return this.foot.offsetTop
    }
    change(){
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.foot.style.left = left + 'px'
        this.foot.style.top = top + 'px'
    }   

}
export default Food