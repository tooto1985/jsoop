function Obj() {
    this.name = "Mark";
    this.run = function() {
        // code
    };
}
var a = new Obj();
var b = new Obj();
var c = new Obj();
//為每個物件增加屬性
a.height = 15;
b.height = 15;
c.height = 15;
//可改成這樣
Obj.prototype.height = 15;