function f(foo, val) {
    with(foo) {
        console.log(val);
    }
}
f({}); //沒有錯誤訊息
f({}, 1); //1
f({val: "val"}, 1); //"val"