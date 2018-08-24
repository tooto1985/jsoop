//es5
var Rectangle1 = function(width) {
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
    constructor(width, height) {
        this._width = width;
    }






}
var r = new Rectangle1(50);
r.width = 1000;
console.log(r.width);