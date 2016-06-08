var util = {
    inherits: function(ctor, superCtor) {
        var F = function() {};
        F.prototype = superCtor.prototype;
        ctor.prototype = new F();
        ctor.uber = superCtor.prototype;
        ctor.prototype.constructor = ctor;
    }
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
util.inherits(B, A);
var objA = new A();
var objB = new B();
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //144
objA.square(); //objA.square is not a function