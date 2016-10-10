function CreatePerson() {






}
CreatePerson.prototype.getName = function() {
    console.log(this.name);
};
var p1 = new CreatePerson();
p1.getName();
p1.name = "John";
p1.getName();
