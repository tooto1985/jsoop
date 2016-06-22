function f(foo, val) {
    with(foo) {
        console.log(val);
    }
}
f({});
f({}, 1);
f({val: "val"}, 1);