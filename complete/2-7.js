function f(x) {
    var temp = x;
    return function(x) {
        temp += x;
        console.log(temp);
    };
}
var a = f(50);
a(5); //55
a(10); //65
a(20); //85