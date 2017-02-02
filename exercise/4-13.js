function CreatePerson(name, gender, year) {
    this.name = name;
    this.gender = gender;








}
CreatePerson.prototype.showName = function() {
    console.log("my name:" + this.name);
};
CreatePerson.prototype.showGender = function() {
    console.log("my gender:" + this.gender);
};
var p1 = new CreatePerson("Mark", "male", 1985);
var p2 = new CreatePerson("Jack", "male", 1978);
console.log(p1.age);