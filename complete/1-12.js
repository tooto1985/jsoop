function run() {
    try {
        return "abc";
    } finally{
        console.log("xyz");
    }
}
console.log(run());
//"xyz"
//"abc"