function run() {
    var args = new Array();
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    // var args = [].slice.call(arguments);
    args.forEach(function(item) {
        console.log(item);
    });
}
run(10, 20, 30);