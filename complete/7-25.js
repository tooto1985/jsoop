//es5
var Rectangle1 = function(id, x, y, width, height) {
    //...
};
Rectangle1.defaultRectangle = function() {
    return new Rectangle1("default", 0, 0, 100, 100);
};
var Circle1 = function(id, x, y, width, height) {
    //...
};
Circle1.defaultCircle = function() {
    return new Circle1("default", 0, 0, 100);
};
var defRectangle = Rectangle1.defaultRectangle();
console.log(defRectangle);
var defCircle = Circle1.defaultCircle();
console.log(defCircle);
//es6
class Rectangle2 {
    //...
    static defaultRectangle() {
        return new Rectangle2("default", 0, 0, 100, 100);
    }
}
class Circle2 {
    //...
    static defaultCircle() {
        return new Circle2("default", 0, 0, 100);
    }
}
var defRectangle = Rectangle2.defaultRectangle();
console.log(defRectangle);
var defCircle = Circle2.defaultCircle();
console.log(defCircle);