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
        if (type === "Coffee") {
            drink = new Coffee();
        } else if (type === "Milk") {
            drink = new Milk();
        } else {
            drink = new OrangeJuice();    
        }
        drink.showColor = function() {
            console.log("Drink color:" + drink.color);
        };
        return drink;
    };
};
var drinkShop = new DrinkShop();
drinkShop.sellDrink("Milk").showColor(); //Drink color:white