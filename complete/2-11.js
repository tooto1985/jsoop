function cube(height) {
    return function(width) {
        return function(depth) {
            return height * width * depth;
        };
    };
}
console.log(cube(3)(2)(1)); //6
var square = cube(3);
var volume = square(2);
console.log(volume(1)); //6
console.log(volume(2)); //12
console.log(volume(3)); //18
console.log(volume(4)); //24
console.log(volume(5)); //30