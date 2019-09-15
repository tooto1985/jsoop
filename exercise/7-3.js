//es5
Object.defineProperty(typeof global === "object" ? global : window, "DATA", {
    value: {
        content: "abc"
    },
    enumerable: true,
    writable: false,
    configurable: false
});
DATA.content = "xyz";
console.log(DATA.content);
//es6
{



    DATA.content = "xyz";
    console.log(DATA.content);
}