(function(window, document) {
    window.onerror = function() {
        console.log("error");
    };
    document.querySelector("body").addEventListener("click", function() {
        console.log("click");
    });
})(window, document);