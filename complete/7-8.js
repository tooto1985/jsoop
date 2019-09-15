//es5
function link(height, color, url) {
    var height = height !== undefined ? height : 50;
    var color = color !== undefined ? color : "red";
    var url = url !== undefined ? url : "http://www.abc.com";
    console.log(height, color, url);
}
link(null, "Blue");
link(undefined, "", "http://www.xyz.com");
//es6
{
    function link(height = 50, color = "red", url = "http://www.abc.com") {
        console.log(height, color, url);
    }
    link(undefined, "Blue");
    link(undefined, "", "http://www.xyz.com");
}