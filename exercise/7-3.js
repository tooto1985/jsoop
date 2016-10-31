//es5
Object.defineProperty(typeof global === "object" ? global : window, "DATA1", {
    value: {
        content: "abc"
    },
    enumerable: true,
    writable: false,
    configurable: false
});
DATA1.content = "xyz";
console.log(DATA1.content);
//es6



DATA2.content = "xyz";
console.log(DATA2.content);