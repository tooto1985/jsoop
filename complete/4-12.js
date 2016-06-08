String.prototype.toNumber = function() {
    return parseInt(this);
};
var ten = "10";
var fifty = "50";
console.log(ten.toNumber()); //10
console.log(fifty.toNumber()); //50