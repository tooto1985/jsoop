function CreatePerson(name, gender) { //構造物件的函式(工廠方式)
    //系統內部執行
    //var this = new Object();

    //加工 
    this.name = name;
    this.gender = gender;
    this.showName = function() {
        console.log("my name:" + this.name);
    };
    this.showGender = function() {
        console.log("my gender:" + this.gender);
    };

    //系統內部執行
    //return this;
}
var p1 = new CreatePerson("Mark", "male");
var p2 = new CreatePerson("Susan", "female");