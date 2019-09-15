//es5
var x = 100;
var y = 200;
var obj = {
    x: x,
    y: y
};
obj["x"+x]=x;
obj["y"+y]=y;
console.log(obj);
//es5(錯誤的範例)
var x = 100;
var y = 200;
var obj = {
    x: x,
    y: y,
    "x"+x:x,
    "y"+y:y
};
console.log(obj);
//es6
{
    let x = 100;
    let y = 200;
    let obj = {
        x,
        y,


    };
    console.log(obj);
}