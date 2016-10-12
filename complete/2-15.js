(function() {
    "use strict";
    console.log(Date.now());
    setTimeout(arguments.callee, 1000);
})();