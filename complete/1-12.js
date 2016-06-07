function run() {
    try {
        return "abc";
    } finally{
        console.log(0);
    }
}
console.log(run());
//0
//"abc"