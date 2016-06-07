function m(x) {
    return function(y) {
        return x * y;
    };
}
var a = m(2);
console.log(a(1)); //2
console.log(a(2)); //4
console.log(a(3)); //6
console.log(a(4)); //8
console.log(a(5)); //10