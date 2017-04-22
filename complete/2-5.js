var g;
function outer() {
    var a = 100;
    function inner() {
        console.log(a);
    }
    g = inner;
}
outer();
console.log(g()); //100