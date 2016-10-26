//es5
var Shape1 = function(id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape1.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};
var a = new Shape1("a", 0, 0);
console.log(a);

//es6










var a = new Shape2("a", 0, 0);
console.log(a);