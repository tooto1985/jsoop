var o = new Object(1);
console.log(o.constructor === Number);
var o = new Object("harry");
console.log(o.constructor === String);
var o = new Object(true);
console.log(o.constructor === Boolean);