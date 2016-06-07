function run() {
    try {
        throw Error("oops");
    } catch(e) {
        console.log(e.message);
    }
}
console.log(run());