//es5
var obj = {
    name: "John",
    age: 30,
    sex: "man"
};
var name = obj.name;
var age = obj.age;
var sex = obj.sex;
console.log(name, age, sex);

//es6
var obj = {
    name: "John",
    age: 30,
    sex: "man"
};
var {name, age, sex} = obj;
console.log(name, age, sex);