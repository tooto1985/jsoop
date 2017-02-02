function CreatePerson(name, gender, year) {
    this.name = name; //公開屬性
    this.gender = gender; //公開屬性
    function caclAge(y) { //私有函式
        var today = new Date();
        return today.getFullYear() - y;
    }
    var age = caclAge(year); //私有變數
    this.showAge = function() { //公開方法
        console.log("my age:" + age);
    };
}
CreatePerson.prototype.showName = function() { //原型方法
    console.log("my name:" + this.name);
};
CreatePerson.prototype.showGender = function() { //原型方法
    console.log("my gender:" + this.gender);
};
var p1 = new CreatePerson("Mark", "male", 1985);
var p2 = new CreatePerson("Jack", "male", 1978);
console.log(p1.age);