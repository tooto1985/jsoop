//忘記new
function Obj(n) {
    this.number = n;
}
var obj = Obj(55); //這裡忘記new
console.log(obj.number); //Cannot read property 'number' of undefined
console.log(number); //55 全域

//防止忘記new
function Obj(n) {
    if (this instanceof Obj) {
        this.number = n;
    } else {
        return new Obj(n);
    }
}
var obj = Obj(55); //這裡忘記new
console.log(obj.number); //55
console.log(number); //number is not defined