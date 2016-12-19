//es5
document.show1 = function() {
    var that = this;
    ["how", "are", "you"].forEach(function(value) {
        var h2 = document.createElement("h2");
        h2.innerText = value;
        that.body.appendChild(h2);
    });
};
document.show1();
//es6
document.show2 = function() {

        var h2 = document.createElement("h2");
        h2.innerText = value;


};
document.show2();