function CreatePerson(name, sex) { //構造物件的函式(工廠方式)
    //系統內部執行
    //var this = new Object();

    //加工 
    this.name = name;
    this.sex = sex;
    this.showName = function() {
        console.log("my name:" + this.name);
    };
    this.showSex = function() {
        console.log("my sex:" + this.sex);
    };

    //系統內部執行
    //return this;
}
var p1 = new CreatePerson("Mark", "man");
var p2 = new CreatePerson("Susan", "woman");