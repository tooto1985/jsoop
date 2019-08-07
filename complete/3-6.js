var a, b;
a = b;
if (a) {
    console.log("a");
}
//可合併成為這樣(Bad)
if (a = b) {
    console.log("a=b");
}
//但常常會看成這樣
if (a == b) {
    console.log("a==b");
}