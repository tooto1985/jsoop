function A() {
    this.abc = 12;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.call(this);
}
B.prototype = A.prototype;
var objA = new A();
var objB = new B();
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //144
objA.square(); //144 (應該要不存在才對)