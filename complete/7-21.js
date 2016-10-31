//es5
function f1(obj) {
    var name = obj.name;
    var age = obj.age;
    console.log(name, age);
}
f1({name: "John", age: 30});
//es6
function f2({name, age}) {
    console.log(name, age);
}
f2({name: "John", age: 30});