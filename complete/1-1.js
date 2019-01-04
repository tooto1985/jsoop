var str="string";
console.log(typeof str); //"string"
str.val=100;
console.log(str.val); //undefined
var obj = new String("string");
console.log(typeof obj); //"object"
obj.val=100;
console.log(obj.val); //100
console.log(typeof obj.valueOf()); //"string"