//相同名稱的函式會被覆蓋
function getUser() {
    console.log("a");
}
function getUser() {
    console.log("b");
}
getUser(); //"b"

//透過命名空間區分相同的方法名稱
var ns = {};
ns.common = {};
ns.custom = {};
ns.common.getUser = function() {
    console.log("a");
};
ns.custom.getUser = function() {
    console.log("b");
};
ns.common.getUser(); //"a"
ns.custom.getUser(); //"b"