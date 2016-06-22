function A() {
    this.abc = 12;
}
A.prototype.show = function() {
    console.log(this.abc);
};
function B() {
    A.call(this);
}