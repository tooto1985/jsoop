//大括號不另起新行
if (true) {
    console.log("ok");
}

//大括號另起新行
if (true) 
{
    console.log("ok");
}

//大括號不另起新行
function run1() {
    return {
        abc: 123
    }
}
console.log(run1());

//大括號另起新行
function run2() {
    return 
    {
        abc: 123
    }  
}
console.log(run2());