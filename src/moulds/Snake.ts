class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.bodies = this.element.getElementsByTagName('div')!;
    }
    get x() {
        return this.head.offsetLeft
    }
    get y() {
        return this.head.offsetTop
    }
    set x(value: number) {
        if (this.x === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('GAME OVAER')
        }
         // 蛇不能水平方向掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.x) {
                value = this.x - 10
            } else {
                value = this.x + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    set y(value: number) {
        if (this.y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('GAME OVAER')
        }
        // 蛇不能垂直方向掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.y) {
                value = this.y - 10
            } else {
                value = this.y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody()
    }
    // 创建蛇的身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    // 给蛇添加一个从后往前移动的方法
    moveBody() {
        // 后面一节等于前面一节的位置，所以应该从后往往前面去遍历
        // 0是蛇头的位置，这里不需要改动
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (<HTMLElement>this.bodies[i - 1]).offsetLeft;
            let Y = (<HTMLElement>this.bodies[i - 1]).offsetTop;
            (<HTMLElement>this.bodies[i]).style.left = X + 'px';
            (<HTMLElement>this.bodies[i]).style.top = Y + 'px';
        }
    }
    // 检查蛇是否撞上了自己的身体
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = <HTMLElement>this.bodies[i];
            if (this.x === body.offsetLeft && this.y === body.offsetTop) {
                throw new Error("蛇撞自己了，gg")
            }
        }
    }
}
export default Snake