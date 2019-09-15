//es5
var xyz = ["x", "y", "z"];
var abc = ["a", "b", "c"];
var out = abc.concat(xyz);
console.log(out);
//es6
{
    let xyz = ["x", "y", "z"];
    let abc = ["a", "b", "c"];
    let out = [...abc, ...xyz];
    console.log(out);
}
//也可用在類別的參數上
function Run(...params) {
    console.log(params);
}
let args = [10, 20, 30];
//es5
var run = new (Function.prototype.bind.apply(Run, [null].concat(args)));
//es6
{
    let run = new Run(...args);
}