//es5(1)
var text = "AAAAA\n";
text += "BBBBB\n";
text += "CCCCC\n";
text += "DDDDD";
console.log(text);

//es5(2)
var text = "AAAAA\n"
    + "BBBBB\n"
    + "CCCCC\n"
    + "DDDDD";
console.log(text);

//es5(3)
var text = "AAAAA\n\
BBBBB\n\
CCCCC\n\
DDDDD";
console.log(text);

//es6
var text = `AAAAA
BBBBB
CCCCC
DDDDD`;
console.log(text);