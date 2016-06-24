if (true) console.log("a"); console.log("b");
//原意可能是
if (true) {console.log("a"); console.log("b");}
//實際執行是
if (true) {console.log("a");} console.log("b");