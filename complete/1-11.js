function run() {
    try {
        console.log(a);
    } catch(e) {
        console.log(e.message);
    }
}
console.log(run());