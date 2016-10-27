//es5
function run1(a, b) {
    console.log(arguments);
}
run1(10, 20, 30);
//es6
function run2(a, ...params) {
    console.log(a, params);
}
run2(10, 20, 30);