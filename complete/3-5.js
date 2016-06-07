//自動轉型
console.log(0 == ""); // true
console.log(1 == true); // true
console.log(2 == true); // false
console.log(0 == "0"); // true
console.log(false == "false"); // false
console.log(false == "0"); // true
console.log(" \t\r\n " == 0); // true

//不自動轉型
console.log(0 === ""); // false
console.log(1 === true); // false
console.log(2 === true); // false
console.log(0 === "0"); // false
console.log(false === "false"); // false
console.log(false === "0"); // false
console.log(" \t\r\n " === 0); // false