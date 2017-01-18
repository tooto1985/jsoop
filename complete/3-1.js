//大括號不另起新行(Good)
if (true) {
    console.log("ok"); //正常
}

//大括號另起新行(Bad)
if (true) 
{
    console.log("ok");  //正常
}

//大括號不另起新行(Good)
function run1() {
    return {
        abc: 123
    }
}
console.log(run1()); //正常

//大括號另起新行(Bad)
function run2() {
    return 
    {
        abc: 123
    }  
}
console.log(run2()); //undefined