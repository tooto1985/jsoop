function A() {
    this.abc = 12;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.call(this);
}
B.prototype = new A();
var objA = new A();
var objB = new B();
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //144
objA.square(); //objA.square is not a function