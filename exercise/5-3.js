function A() {
    this.abc = 12;
    this.run = function() {
        console.log("go");
    };
}
A.prototype.show = function() {
    console.log(this.abc);
};