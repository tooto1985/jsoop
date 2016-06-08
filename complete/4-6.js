var ary1 = new Array(12, 55, 43, 32, 44);
ary1.sum = function() {
    var output = 0;
    for (var i = 0; i < this.length; i++) {
        output += this[i];
    }
    return output;
};
console.log(ary1.sum());
var ary2 = new Array(12, 33, 1);
ary2.sum(); //ary2.sum is not a function