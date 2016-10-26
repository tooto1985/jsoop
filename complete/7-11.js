//es5
var url="http://www.abc.com";
var name="www.abc.com";
var link = "<a href=\"" + url + "\">" + name + "</a>";
console.log(link);

//es6
var url="http://www.abc.com";
var name="www.abc.com";
var link = `<a href="${url}">${name}</a>`;
console.log(link);