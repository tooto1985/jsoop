var name = "A";
var obj = {
    name: "B",
    getName: function() {
        var that = this;
        return function() {
            return that.name;
        };
    }
};
console.log(obj.getName()());