var a, b;
a = b;
if (a) {
    console.log("a");
}
//可以合併成為這樣
if (a = b) {
    console.log("a=b");
}
//但我們常常會看成
if (a == b) {
    console.log("a==b");
}