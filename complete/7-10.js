//es5
var xyz = ["x", "y", "z"];
var abc = ["a", "b", "c"];
console.log(abc.concat(xyz));

//es6
var xyz = ["x", "y", "z"];
var abc = ["a", "b", "c", ...xyz];
console.log(abc);