function createPerson(name, sex) { //構造物件的函式(工廠方式)
    //原料
    var obj = new Object();
    //加工 
    obj.name = name;
    obj.sex = sex;
    obj.showName = function() {
        console.log("my name:" + this.name);
    };
    obj.showSex = function() {
        console.log("my sex:" + this.sex);
    };
    //出廠
    return obj;
}
var p1 = createPerson("Mark", "man");
p1.showName();
p1.showSex();
var p2 = createPerson("Susan", "woman");
p2.showName();
p2.showSex();