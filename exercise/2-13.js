var a = 1;
function hoisting() {
    if (!a) {
        var a = 2;
    }
    console.log(a);
}
hoisting();