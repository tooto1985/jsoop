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
var obj = new B();
console.log(obj.abc); //12
obj.show(); //12