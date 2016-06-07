//自動加上分號
var a = 1 // => var a = 1;
if (a) {
    console.log("ok")
}

//不會自動加上分號
var a = 1
(function () {
    return "xxx"
})()