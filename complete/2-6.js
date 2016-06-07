var name = "A";
var obj = {
    name: "B",
    getName: function() {
        var that = this; //this是指obj這個物件(形成閉包)
        return function() {
            return that.name;
        };
    }
};
console.log(obj.getName()()); //B