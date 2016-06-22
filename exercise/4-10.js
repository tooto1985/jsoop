function CreatePerson(name, sex) {
    this.name = name;
    this.sex = sex;
}
CreatePerson.prototype.showName = function() {
    console.log("my name:" + this.name);
};
CreatePerson.prototype.showSex = function() {
    console.log("my sex:" + this.sex);
};
var p1 = new CreatePerson("Mark", "man");
var p2 = new CreatePerson("Jack", "man");
console.log(p1.showName === p2.showName);