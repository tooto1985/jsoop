//自動轉型
console.log(0 == "");
console.log(1 == true);
console.log(2 == true);
console.log(0 == "0");
console.log(false == "false");
console.log(false == "0");
console.log(" \t\r\n " == 0);

//不自動轉型
console.log(0 === "");
console.log(1 === true);
console.log(2 === true);
console.log(0 === "0");
console.log(false === "false");
console.log(false === "0");
console.log(" \t\r\n " === 0);