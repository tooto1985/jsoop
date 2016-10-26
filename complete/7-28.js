//es5
var dst  = {quux: 0};
var src1 = {foo: 1, bar: 2};
var src2 = {foo: 3, baz: 4};
Object.keys(src1).forEach(function(k) {
    dst[k] = src1[k];
});
Object.keys(src2).forEach(function(k) {
    dst[k] = src2[k];
});
console.log(dst);

//es6
var dst  = {quux: 0}
var src1 = {foo: 1, bar: 2}
var src2 = {foo: 3, baz: 4}
Object.assign(dst, src1, src2);
console.log(dst);