var json = {
    name: "John",
    show: function() {
        console.log(this.name);
    },
    empty: undefined,
    nothing: null
};
var jsonString = JSON.stringify(json);
console.log(jsonString);
var jsonObject = JSON.parse(jsonString);