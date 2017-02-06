function f(foo, val) {
    with(foo) { //(Bad)
        console.log(val);
    }
}
f({}); //undefined
f({}, 1); //1
f({val: "val"}, 1); //"val"