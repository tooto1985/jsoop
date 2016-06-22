var x = 5;
(function() {
    console.log(x);
    var x = 10;
})();
console.log(x);