//es5
function range(start, end, step) {
    var list = [];
    while (start < end) {
        list.push(start);
        start += step;
    }
    return list;
}
var r = range(0, 10, 2);
for (var i = 0; i < r.length; i++) {
    console.log(r[i]); // 0, 2, 4, 6, 8
}
//es6
{
    function* range(start, end, step) {
        while (start < end) {
            yield start
            start += step
        }
    }
    for (let i of range(0, 10, 2)) {
        console.log(i) // 0, 2, 4, 6, 8
    }
}