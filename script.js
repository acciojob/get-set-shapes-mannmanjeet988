//complete this code
class Rectangle {
	constructor(width,height){
    this.width=width;
    this.height=height;
    }

    getArea(){
        return `Area is : ${this.width}*${this.height}`
    }
}

class Square extends Rectangle {
    constructor(side){
        super()
        this.side=side;
    }
    getPerimeter(){
        return `Perimeter is : ${this.side}*${this.side}`
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
