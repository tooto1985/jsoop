//es5
function Rectangle() {
};
Rectangle.getMaxRadius = function(width, height) {
    return Math.min(width, height) / 2;
};
function Circle() {
};
Circle.getPerimeter = function(radius) {
    return radius * 3.1415926;
};
var maxRadius = Rectangle.getMaxRadius(40, 80);
console.log(maxRadius);
var perimeter = Circle.getPerimeter(30);
console.log(perimeter);
//es6
{










    let maxRadius = Rectangle.getMaxRadius(40, 80);
    console.log(maxRadius);
    let perimeter = Circle.getPerimeter(30);
    console.log(perimeter);
}