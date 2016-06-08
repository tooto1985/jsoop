var cat = {}; //建立一個空物件
cat.name = "kitty"; //新增一個屬性
cat.getName = function() { //新增一個方法
    return this.name;
};
//也可以這樣寫
var cat = {
    name: "kitty",
    getName: function() {
        return this.name;
    }
};