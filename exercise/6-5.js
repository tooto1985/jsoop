function Computer() {
    this.cost = function() {
        return 41900;
    };
    this.screenSize = function() {
        return 12;
    };
}
function addMemory(pc) {
    
    
    

}
function addEngraving(pc) {
    
    
    
    
}
function addInsurance(pc) {
    
    
    
    
}
var mb = new Computer();
//增加記憶體、刻字、保固
addMemory(mb);
addEngraving(mb);
addInsurance(mb);
console.log(mb.cost());