//es5
var obj = {
    foo: function(a, b) {
        console.log(a, b);
    },
    bar: function(x, y) {
        console.log(x, y);
    }
};
obj.foo(10,30);
obj.foo(20,40);

//es6
var obj = {
    foo(a, b) {
        console.log(a, b);
    },
    bar(x, y) {
        console.log(x, y);
    }
};
obj.foo(10,30);
obj.foo(20,40);