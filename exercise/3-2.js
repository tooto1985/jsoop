//一般來說不規範
var a=0;
if(a===0){}
function foo (b){
    return(a+b);
}
(function (x){
    foo (x);
})();

//建議修改成







