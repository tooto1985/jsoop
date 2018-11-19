Function.prototype.inherits = function(superCtor) {
    Object.setPrototypeOf(this.prototype, superCtor.prototype);
    this.super = superCtor.prototype;
};

function Drink() {
}
Drink.prototype.showColor = function() {
    console.log("Drink color:" + this.color);
};

function Coffee() {
    this.color = "brown";
}
Coffee.inherits(Drink);

function Milk() {
    this.color = "white";
}
Milk.inherits(Drink);

function OrangeJuice() {
    this.color = "orange";
}
OrangeJuice.inherits(Drink);

var factory = {
    build: function (type) {
        return new type();
    }
};
var milk = factory.build(Milk);
milk.showColor(); //Drink color:white