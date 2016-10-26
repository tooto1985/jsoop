//es5
var obj = {
    name: {
        firstName: "John",
        lastName: "Lin"
    },
    age: 30,
    sex: "man"
};
var firstName = obj.name.firstName;
var lastName = obj.name.lastName;
var age = obj.age;
var sex = obj.sex;
console.log(firstName, lastName, age, sex);

//es6
var obj = {
    name: {
        firstName: "John",
        lastName: "Lin"
    },
    age: 30,
    sex: "man"
};
var {name:{firstName, lastName}, age, sex} = obj;
console.log(firstName, lastName, age, sex);