var o = new Object(1);
console.log(o.constructor); //function Number() (不應該有Number的原型方法)
var o = new Object("text");
console.log(o.constructor); //function String() (不應該有String的原型方法)
var o = new Object(true);
console.log(o.constructor); //function Boolean() (不應該有Boolean的原型方法)