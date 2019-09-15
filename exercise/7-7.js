//es5
document.show = function() {
    var that = this;
    ["how", "are", "you"].forEach(function(value) {
        var h2 = document.createElement("h2");
        h2.innerText = value;
        that.body.appendChild(h2);
    });
};
document.show();
//es6
document.show = function() {

        let h2 = document.createElement("h2");
        h2.innerText = value;


};
document.show();