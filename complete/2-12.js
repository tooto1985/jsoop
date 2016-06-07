var x = 5;
(function() {
    console.log(x); //不是5，而是undefined
    var x = 10;
})();
console.log(x);