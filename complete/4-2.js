var obj = new Object();
obj.name = "John";
obj.gender = "male";
obj.showName = function() {
    console.log("my name:" + this.name);
};
obj.showGender = function() {
    console.log("my gender:" + this.gender);
};
obj.showName();
obj.showGender();