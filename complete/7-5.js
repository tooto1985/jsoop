//es5
var input = [10, 20, 30, 40, 50];
var output = input.map(function(value) {
    return value+1;
});
console.log(output);
//es6
var input = [10, 20, 30, 40, 50];
var output = input.map(value => {
    return value+1;
});
console.log(output);