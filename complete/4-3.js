function createPerson(name, gender) { //構造物件的函式(工廠方式)
    //原料
    var obj = new Object();
    //加工 
    obj.name = name;
    obj.gender = gender;
    obj.showName = function() {
        console.log("my name:" + this.name);
    };
    obj.showGender = function() {
        console.log("my gender:" + this.gender);
    };
    //出廠
    return obj;
}
var p1 = createPerson("Mark", "male");
p1.showName();
p1.showGender();
var p2 = createPerson("Susan", "female");
p2.showName();
p2.showGender();