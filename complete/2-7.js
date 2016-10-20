var add = (function() {
    var count=0;
    return function() {
        return count += 1;
    };
})();
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
