Object.prototype.inherits = function(superCtor) {
    var F = function() {};
    F.prototype = superCtor.prototype;
    this.prototype = new F();
    this.uber = superCtor.prototype;
    this.prototype.constructor = this;
};
function A(abc) {
    this.abc = abc || 12;
    console.log("A class");
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.apply(this, arguments);
}
B.inherits(A);
var objA = new A();
var objB = new B();
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //144
objA.square(); //objA.square is not a function