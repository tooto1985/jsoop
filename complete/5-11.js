//Object原型繼承方法
Object.prototype.inherits = function(superCtor) {
    var F = function() {};
    F.prototype = superCtor.prototype;
    this.prototype = new F();
    this.uber = superCtor.prototype;
    this.prototype.constructor = this;
};

//建立Point類別
function Point() {
    this.x = 0;
    this.y = 0;
}
Point.prototype.write = function(x,y) {
    this.x = x;
    this.y = y;
};
Point.prototype.read = function() {
    return {x:this.x,y:this.y};
};
var p = new Point();
p.write(5,7);
console.log(p.read()); //{x: 5, y: 7}

//建立RangePoint類別
function RangePoint(min,max) {
    Point.apply(this,arguments);
    this.min = min;
    this.max = max;
}
RangePoint.inherits(Point);
RangePoint.prototype.write = function(x,y) {
    x = x < this.min ? this.min : x;
    x = x > this.max ? this.max : x;
    y = y < this.min ? this.min : y;
    y = y > this.max ? this.max : y;
    if (this.constructor === RangePoint) {
        this.constructor.uber.write.apply(this,arguments);
    } else if (this.constructor === IntegerRangePoint) {
        this.constructor.uber.constructor.uber.write.apply(this,arguments);
    }
};
var rp = new RangePoint(-50,50);
rp.write(-100,100);
console.log(rp.read()); //{x: -50, y: 50}

//建立IntegerRangePoint類別
function IntegerRangePoint() {
    RangePoint.apply(this,arguments);
}
IntegerRangePoint.inherits(RangePoint);
IntegerRangePoint.prototype.write = function(x,y) {
    x = Math.round(x);
    y = Math.round(y);
    this.constructor.uber.write.apply(this,arguments);
};
var irp = new IntegerRangePoint(0,10);
irp.write(9.1,7.8);
console.log(irp.read()); //{x: 9, y:8}