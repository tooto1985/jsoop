function f(foo, val) {
    with(foo) {
        console.log(val);
    }
}
f({}); //undefined
f({}, 1); //1
f({val: "val"}, 1); //"val"