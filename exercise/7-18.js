//es5
var obj = {
    name: "John",
    age: 30,
    gender: "male"
};
var name = obj.name;
var age = obj.age;
var gender = obj.gender;
console.log(name, age, gender);
//es6
{
    let obj = {
        name: "John",
        age: 30,
        gender: "male"
    };

    console.log(name, age, gender);
}