var a = 1;
(function(a) {
    a = 100;
    console.log(a); // 100
})(a);
console.log(a); // 1