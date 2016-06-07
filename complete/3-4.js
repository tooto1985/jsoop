//簡化程式碼
var foo;
var o = {bar: 1};
with(o) {
    foo = bar;
}
console.log(foo); //1

//變數是否有定義決定結果
var bar=1;
var o={foo:0};
with(o) {
    foo = bar;
}
console.log(foo); //undefined