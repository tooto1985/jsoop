Function.prototype.inherits = function(superCtor) {
    function F() {
    }
    F.prototype = superCtor.prototype;
    this.prototype = new F();
    this.super = superCtor.prototype;
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
var objB = new B();
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //144