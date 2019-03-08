var n = 1;
if (n == 1 || n == 2 || n == 3) {
    console.log("n<=3");
} else if (n == 4 || n == 5) {
    console.log("n>3 & n<=5");
} else {
    console.log("n>5");
}
switch (n) {
    case 1:
    case 2:
    case 3:
        console.log("n<=3");
        break;
    case 4:
    case 5:
        console.log("n>3 & n<=5");
        break;
    default:
        console.log("n>5");
}