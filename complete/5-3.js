function A() {
    this.abc = 12;
    this.run = function() {
        console.log("go");
    };
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.call(this);
}
var obj = new B();
console.log(obj.abc); //12
obj.run(); //"go"
obj.show(); //obj.show is not a function