var o = new Object(1);
console.log(o.constructor === Number); //true (不應該有Number的原型方法)
var o = new Object("harry");
console.log(o.constructor === String); //true (不應該有String的原型方法)
var o = new Object(true);
console.log(o.constructor === Boolean); //true(不應該有Boolean的原型方法)