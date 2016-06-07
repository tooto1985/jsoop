var a = 100;
(function(){
    var local = true;
    console.log(a); //100;
})();
console.log(local); //local is not defined