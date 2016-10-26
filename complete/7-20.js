//es5
function f1(ary) {
    var name = ary[0];
    var age = ary[1];
    console.log(name, age);
}
f1(["John", 30]);

//es6
function f2([name, age]) {
    console.log(name, age);
}
f2(["John", 30]);