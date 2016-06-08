//忘記new
function Obj(n) {
    this.name = "Mark";
    this.number = n;
}
var obj = Obj(55); //這裡忘記new
console.log(obj.name); //Cannot read property 'name' of undefined
console.log(obj.number); //Cannot read property 'number' of undefined
console.log(name); //"Mark" 全域
console.log(number); //55 全域

//防止忘記new
function Obj(n) {
    if (this instanceof Obj) {
        this.name = "Mark";
        this.number = n;
    } else {
        return new Obj(n);
    }
}
var obj = Obj(55); //這裡忘記new
console.log(obj.name); //"Mark"
console.log(obj.number); //55
console.log(name); //""
console.log(number); //number is not defined