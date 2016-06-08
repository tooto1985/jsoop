var Coffee = function() {
    this.color = "brown";
};
var Milk = function() {
    this.color = "white";
};
var OrangeJuice = function() {
    this.color = "orange";
};
var DrinkShop = function() {
    this.sellDrink = function(type) {
        var drink;
        if (typeof window[type] !== "function") {
            type="OrangeJuice"; //Default
        }
        drink = new window[type]();
        drink.showColor = function() {
            console.log("Drink color:" + drink.color);
        };
        return drink;
    };
};
var drinkShop = new DrinkShop();
drinkShop.sellDrink("milk").showColor(); //Drink color:white