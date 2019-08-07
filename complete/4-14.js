function CreatePerson() {
    Object.defineProperty(this, "name", {
        value: "Mark", //值也可是function
        enumerable: true, //是否可已被列舉for in
        writable: false, //是否可已被修改值
        configurable: true //是否可刪除屬性或修改特性的enumerable、writable、configurable屬性
    });
}
CreatePerson.prototype.getName = function() {
    console.log(this.name);
};
var p1 = new CreatePerson();
p1.getName(); //Mark
p1.name = "John";
p1.getName(); //Mark
