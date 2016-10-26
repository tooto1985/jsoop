//es5
var Rectangle1 = function(width, height) {
    this._width = width;
    this._height = height;
};
Rectangle1.prototype = {
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    },
    set height(height) {
        this._height = height;
    },
    get height() {
        return this._height;
    },
    get area() {
        return this._width * this._height;
    }
};
var r = new Rectangle1(50, 20);
console.log(r.area === 1000);

//es6
class Rectangle2 {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }















}
var r = new Rectangle2(50, 20)
console.log(r.area === 1000);