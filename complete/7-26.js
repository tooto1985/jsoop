//es5
function Rectangle1(width) {
    this._width = width;
};
Rectangle1.prototype = {
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    }
};
var r = new Rectangle1(50);
r.width = 1000;
console.log(r.width);
//es6
class Rectangle2 {
    constructor(width) {
        this._width = width
    }
    set width(width) {
        this._width = width
    }
    get width() {
        return this._width
    }
}
var r = new Rectangle2(50)
r.width = 1000;
console.log(r.width);