//es5
console.log([1, 3, 4, 2].filter(function(x) {
    return x > 3;
})[0]);
//es6
console.log([1, 3, 4, 2].find(x => x > 3));