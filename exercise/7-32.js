//es5
var isNaN = function(n) {
    return n !== n;
};
var isFinite = function(v) {
    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
};
console.log(isNaN(42) === false);
console.log(isNaN(NaN) === true);
console.log(isFinite(Infinity) === false);
console.log(isFinite(-Infinity) === false);
console.log(isFinite(NaN) === false);
console.log(isFinite(123) === true);
//es6
console.log(Number.isNaN(42) === false);
console.log(Number.isNaN(NaN) === true);
console.log(Number.isFinite(Infinity) === false);
console.log(Number.isFinite(-Infinity) === false);
console.log(Number.isFinite(NaN) === false);
console.log(Number.isFinite(123) === true);