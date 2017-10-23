function Computer() {
    this.price = function() {
        return 41900;
    };
}
function addMemory(pc) { //Decorator 1 - 增加記憶體需多增$10000
    var price = pc.price();
    pc.price = function() {
        return price + 10000;
    };
}
function addEngraving(pc) { //Decorator 2 - 增加刻字服務多增$1000
    var price = pc.price();
    pc.price = function() {
        return price + 1000;
    };
}
function addInsurance(pc) { //Decorator 3 - 增加保固需多增$8590
    var price = pc.price();
    pc.price = function() {
        return price + 8590;
    };
}
var mb = new Computer();
//增加記憶體、刻字、保固
addMemory(mb);
addEngraving(mb);
addInsurance(mb);
console.log(mb.price());//61490