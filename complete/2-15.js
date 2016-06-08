"use strict";
(function() {
    console.log(Date.now());
    setTimeout(arguments.callee, 1000);
})();