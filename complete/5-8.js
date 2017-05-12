function A(abc) {
    this.abc = abc || 12;
    console.log("A class"); //繼承的時後會執行兩次
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.apply(this, arguments);
}
B.prototype = new A();
var objB = new B(11);
B.prototype.square = function() {
    console.log(this.abc * this.abc);
};
objB.square(); //121