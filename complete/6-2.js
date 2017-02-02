function Cat() {
    if (typeof Cat.instance === "object") {
        return Cat.instance;
    }
    this.name = "kitty";
    Cat.instance = this;
    return this;
}
Cat.prototype.move = function() {
    return this.name + " move";
};
var cat1 = new Cat();
var cat2 = new Cat();
console.log(cat1 === cat2); //true
cat1.name = "coco";
console.log(cat2.name); //"coco"