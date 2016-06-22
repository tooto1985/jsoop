function myObject() {
    this.x = 100;
}
//忘記new
var p = myObject();
//建構函式字首大寫
function MyObject() {
    this.x = 100;
}
var q = new MyObject();