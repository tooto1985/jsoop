//es5
(function() {
    function foo() { return 1; }
    (function() {
        function foo() { return 2; }
        console.log(foo());
    })();
    console.log(foo());
})();

//es6
{
    function foo() { return 1; }
    {
        function foo() { return 2; }
        console.log(foo());
    }
    console.log(foo());
}