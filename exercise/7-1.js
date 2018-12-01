//es5
(function() {
    var a = 5;
    (function() {
        var a = 6;
        console.log(a);
    })();
    console.log(a);
})();
//es6
{
    
    {
        
        console.log(a);
    }
    console.log(a);
}
//let在for迴圈中





//let看起來好像沒有hoisting




//let其實有hoisting但無法操作(又稱死區Dead Zone)






