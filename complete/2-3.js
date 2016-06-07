var a = 1;
(function() {
    a = 100;
    console.log(a); // 100
})();
console.log(a); // 100