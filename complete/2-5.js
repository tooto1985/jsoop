var name = "A";
var obj = {
    name: "B",
    getName: function() {
        return function() {
            return this.name;
        };
    }
};
console.log(obj.getName()()); //A, 不是B