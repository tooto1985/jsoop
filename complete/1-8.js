function build() {
    var args = new Array();
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    args.forEach(function(item) {
        console.log(item);
    });
}
build(10, 20, 30);