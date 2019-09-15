//es5
var list = [7, 42];
var a = list[0] !== undefined ? list[0] : 1;
var b = list[1] !== undefined ? list[1] : 2;
var c = list[2] !== undefined ? list[2] : 3;
console.log(a, b, c);
//es6
{
    var list = [7, 42];

    console.log(a, b, c);
}