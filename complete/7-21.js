//es5
function fn(obj) {
    var name = obj.name;
    var age = obj.age;
    console.log(name, age);
}
fn({name: "John", age: 30});
//es6
{
    function fn({name, age}) {
        console.log(name, age);
    }
    fn({name: "John", age: 30});
}