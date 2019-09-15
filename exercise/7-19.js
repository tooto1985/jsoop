//es5
var obj = {
    name: {
        firstName: "John",
        lastName: "Lin"
    },
    age: 30,
    gender: "male"
};
var firstName = obj.name.firstName;
var lastName = obj.name.lastName;
var age = obj.age;
var gender = obj.gender;
console.log(firstName, lastName, age, gender);
//es6
{
    let obj = {
        name: {
            firstName: "John",
            lastName: "Lin"
        },
        age: 30,
        gender: "male"
    };

    console.log(firstName, lastName, age, gender);
}