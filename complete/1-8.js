function run() {
    var args = [].slice.call(arguments);
    args.forEach(function(item) {
        console.log(item);
    });
}
run(10, 20, 30);