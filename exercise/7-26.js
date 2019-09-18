//es5
function Rectangle(width) {
    this._width = width;
};
Rectangle.prototype = {
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    }
};
var r1 = new Rectangle(50);
r1.width = 1000;
console.log(r1.width);
//es6
{
    class Rectangle {
        constructor(width) {
            this._width = width;
        }






    }
    let r1 = new Rectangle(50);
    r1.width = 1000;
    console.log(r1.width);
}