function CreatePerson(name, sex, year) {
    this.name = name;
    this.sex = sex;








}
CreatePerson.prototype.showName = function() {
    console.log("my name:" + this.name);
};
CreatePerson.prototype.showSex = function() {
    console.log("my sex:" + this.sex);
};
var p1 = new CreatePerson("Mark", "man", 1985);
var p2 = new CreatePerson("Jack", "man", 1978);
console.log(p1.age);