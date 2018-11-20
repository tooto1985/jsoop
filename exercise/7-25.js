//es5
function Rectangle1(id, x, y, width, height) {
    //...
};
Rectangle1.defaultRectangle = function() {
    return new Rectangle1("default", 0, 0, 100, 100);
};
function Circle1(id, x, y, width, height) {
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












var defRectangle = Rectangle2.defaultRectangle();
console.log(defRectangle);
var defCircle = Circle2.defaultCircle();
console.log(defCircle);