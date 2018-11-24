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
    let a = 5;
    {
        let a = 6;
        console.log(a);
    }
    console.log(a);
}
//let在for迴圈中
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
//let看起來好像沒有hoisting
{
    console.log(a);
    let a = 1;
}
//let其實有hoisting但無法操作(又稱作死區Dead Zone)
{
    let a = 2;
    {
        console.log(a);
        let a = 1;
    }
}

