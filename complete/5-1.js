function show(a, b) {
    console.log(this + "\n" + a + "\n" + b);
}
//show(5,10);
show.call("abc", 5, 10);