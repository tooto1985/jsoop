function Cat() {
    this.name = "kitty";
    this.getName = function() {
        return this.name;
    };
}
var car = new Cat();