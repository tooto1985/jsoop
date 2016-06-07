function run() {
    try {
        return "abc";
    } finally{
        return "xyz";
    }
}    
console.log(run()); //"xyz";