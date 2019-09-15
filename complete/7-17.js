//es5
var item = ["a", "z"];
var a = item[0];
var z = item[1];
item = [z, a];
console.log(item);
//es6
{
    let item = ["a", "z"];
    let [a, z] = item;
    item = [z, a];
    console.log(item);
}