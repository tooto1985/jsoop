//es5
console.log("hello".indexOf("h") === 0);
console.log("hello".indexOf("o") === ("hello".length - 1));
console.log("hello".indexOf("l") !== -1);
//es6
console.log("hello".startsWith("h"));
console.log("hello".endsWith("o"));
console.log("hello".includes("l"));