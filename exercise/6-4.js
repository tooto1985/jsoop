var agg = (function() {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;
    return {
        next: function() {
            
            
            
            
            
            
            
        },
        hasNext: function() {
            
        },
        rewind: function() {
            
        },
        current: function() {
            
        }
    };
})();
agg.rewind();
while (agg.hasNext()) {
    console.log(agg.current());
    agg.next();
}