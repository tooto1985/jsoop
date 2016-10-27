//es5
var list = [7, 42];
var a = list[0] ? list[0] : 1;
var b = list[1] ? list[1] : 2;
var c = list[2] ? list[2] : 3;
var d = list[3] ? list[3] : undefined;
console.log(a, b, c, d);
//es6
var list = [7, 42];

console.log(a, b, c, d);