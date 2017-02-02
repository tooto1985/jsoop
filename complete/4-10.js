function CreatePerson(name, gender) {
    this.name = name;
    this.gender = gender;
}
CreatePerson.prototype.showName = function() {
    console.log("my name:" + this.name);
};
CreatePerson.prototype.showGender = function() {
    console.log("my gender:" + this.gender);
};
var p1 = new CreatePerson("Mark", "male");
var p2 = new CreatePerson("Jack", "male");
console.log(p1.showName === p2.showName); //true