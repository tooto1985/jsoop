//es5
Object.prototype.inherits = function(superCtor) {
    var F = function() {};
    F.prototype = superCtor.prototype;
    this.prototype = new F();
    this.uber = superCtor.prototype;
    this.prototype.constructor = this;
};
var Shape1 = function(id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape1.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};
var Rectangle1 = function(id, x, y, width, height) {
    Shape1.call(this, id, x, y);
    this.width = width;
    this.height = height;
};
Rectangle1.inherits(Shape1);
var Circle1 = function(id, x, y, radius) {
    Shape1.call(this, id, x, y);
    this.radius = radius;
};
Circle1.inherits(Shape1);
var a = new Rectangle1("a", 0, 0, 100, 100);
console.log(a);
var b = new Circle1("b", 0, 0, 100);
console.log(b);

//es6
class Shape2 {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}
class Rectangle2 extends Shape2 {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}
class Circle2 extends Shape2 {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
var a = new Rectangle2("a", 0, 0, 100, 100);
console.log(a);
var b = new Circle2("b", 0, 0, 100);
console.log(b);