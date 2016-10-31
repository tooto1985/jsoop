//es5
Object.defineProperty(typeof global === "object" ? global : window, "PI1", {
    value: 3.1415926,
    enumerable: true,
    writable: false,
    configurable: false
});
console.log(PI1); //3.1415926
PI1 = 100;
console.log(PI1); //3.1415926
//es6
const PI2 = 3.1415926;
console.log(PI2); //3.1415926
PI2 = 100; //Assignment to constant variable.
console.log(PI2); //3.1415926