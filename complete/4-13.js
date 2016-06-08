function CreatePerson(name, sex, year) {
    this.name = name; //公開屬性
    this.sex = sex; //公開屬性
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
CreatePerson.prototype.showSex = function() { //原型方法
    console.log("my sex:" + this.sex);
};
var p1 = new CreatePerson("Mark", "man", 1985);
var p2 = new CreatePerson("Jack", "man", 1978);
console.log(p1.age);