//this會指向當前function(方法)屬於ary的物件
var ary = [1, 2, 3];
ary.a = 12;
ary.show = function() {
    console.log(this.a); //this == ary
};
ary.show();

//this會指向當前function(方法)屬於document的物件
document.onclick = function() {
    console.log(this); //document
};

//this會指window
function show() {
    console.log(this); //window
}
show();

//同於下面的寫法
window.show = function() {
    console.log(this); //window
};
show();