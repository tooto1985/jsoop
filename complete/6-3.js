function Coffee() {
    this.color = "brown";
}
function Milk() {
    this.color = "white";
}
function OrangeJuice() {
    this.color = "orange";
};
function Factory() {
    this.build = function (type) {
        var drink;
        if (typeof type !== "function") {
            type = Coffee; //Default
        }
        drink = new type();
        drink.showColor = function () {
            console.log("Drink color:" + drink.color);
        };
        return drink;
    };
};
var factory = new Factory();
var milk = factory.build(Milk);
milk.showColor(); //Drink color:white