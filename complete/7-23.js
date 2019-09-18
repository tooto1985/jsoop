//es5
function Shape(id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};
var shape = new Shape("a", 0, 0);
console.log(shape);
//es6
{
    class Shape {
        constructor(id, x, y) {
            this.id = id
            this.move(x, y)
        }
        move(x, y) {
            this.x = x
            this.y = y
        }
    }
    let shape = new Shape("a", 0, 0);
    console.log(shape);
}