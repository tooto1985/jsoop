//es5
function run(a, b) {
    console.log(arguments);
}
run(10, 20, 30);
//es6
{
    function run(a, ...params) {
        console.log(a, params);
    }
    run(10, 20, 30);
}