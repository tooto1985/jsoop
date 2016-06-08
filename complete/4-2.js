var obj = new Object();
obj.name = "John";
obj.sex = "man";
obj.showName = function() {
    console.log("my name:" + this.name);
};
obj.showSex = function() {
    console.log("my sex:" + this.sex);
};
obj.showName();
obj.showSex();