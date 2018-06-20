var a="string";
console.log(typeof a); //"string"
a.val=100;
console.log(a.val); //undefined
var b = new String("string");
console.log(typeof b); //"object"
b.val=100;
console.log(b.val); //100
console.log(typeof b.valueOf()); //"string"