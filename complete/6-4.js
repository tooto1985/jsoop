var egg = (function() {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;
    return {
        next: function() {
            index = index + 1;
        },
        hasNext: function() {
            return index < length;
        },
        first: function() {
            index = 0;
        },
        current: function() {
            return data[index];
        }
    };
})();
egg.first();
while (egg.hasNext()) {
    console.log(egg.current());
    egg.next();
}