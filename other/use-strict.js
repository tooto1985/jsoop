//https://msdn.microsoft.com/zh-tw/library/br230269(v=vs.94).aspx

(function() {
    "use strict";
    testvar = 4;
    //未在 strict 模式中定義此變數
})(); //1

(function() {
    "use strict";
    var testObj = Object.defineProperties({}, {
        prop1: {
            value: 10,
            writeable: false
        },
        prop2: {
            get: function() {}
        }
    });
    testObj.prop1 = 20;
    testObj.prop2 = 30;
    //不可在 strict 模式中指派唯讀屬性
})(); //2

(function() {
    "use strict";
    var testObj = new Object();
    Object.preventExtensions(testObj);
    testObj.name = "Bob";
    //不可為無法延伸的物件建立屬性
})(); //3

(function() {
    "use strict";
    var testvar = 15;
    function testFunc() {};
    delete testvar;
    delete testFunc;
    var testObj = {};
    Object.defineProperty(testObj, "testvar", {
        value: 10,
        configurable: false
    });
    delete testObj.testvar;
    //strict 模式中不允許在<運算式>上呼叫刪除
})(); //4

(function() {
    "use strict";
    var testObj = {
        prop1: 10,
        prop2: 15,
        prop1: 20
    };
    //strict 模式中不允許屬性有多個定義
})(); //5(IE only)

(function() {
    "use strict";
    function testFunc(param1, param1) {
        return 1;
    };
    //strict 模式中不允許重複的型式參數名稱
})(); //6

(function() {
    "use strict";
    var implements;
    var interface;
    var package;
    var private;
    var protected;
    var public;
    var static;
    var yield;
    //使用未來供識別項使用的保留字是無效的動作。在 strict 模式中識別項名稱是保留字。
})(); //7

(function() {
    "use strict";
    var testoctal = 010;
    var testescape = \010;
    //strict 模式中不允許八進位數值常值和逸出字元
})(); //8

(function() {
    "use strict";
    function testFunc() {
        return this;
    }
    var testvar = testFunc();
    //如果不是在 strict 模式下，testvar 的值是全域物件，但是其值在 strict 模式下則是 undefined。
})(); //9.

(function() {
    "use strict";
    var eval = 10;
    //"eval" 這個字串不能當做識別項 (變數或函式名稱、參數名稱等等)。
})(); //10

(function() {
    "use strict";
    if (true) {
        function run() {
            console.log("run");
        }
    }
    run();
    //在 strict 模式中，函式宣告不可以巢狀在陳述式或區塊內部。它們只可以出現在最上層或直接位於函式主體內。
})(); //11

(function() {
    "use strict";
    eval("var testvar = 10");
    testvar = 15;
    console.log(testvar);
    //strict 模式中 'eval' 的使用方式無效
})(); //12

(function() {
    "use strict";
    function testArgs() {
        var arguments = 10;
    }
    testArgs();
    //strict 模式中 'arguments' 的使用方式無效
})(); //13

(function() {
    "use strict";
    function testArgs(oneArg) {
        arguments[0] = 20;
        console.log(oneArg);
    }
    testArgs(10);
    //如果不是在 strict 模式下，您可以變更 arguments[0] 的值來變更 oneArg 參數的值，因此 oneArg 和 arguments[0] 的值都是 20；在 strict 模式下，因為 arguments 物件只是區域複本，所以變更 arguments[0] 的值並不會影響 oneArg 的值。
})(); //14.

(function() {
    "use strict";
    (function (testInt) {
        if (testInt-- == 0)
            return;
        arguments.callee(testInt--);
    })(1);
    //arguments.callee不允許。
})(); //15

(function() {
    "use strict";
    with (Math){
        x = cos(3);
        y = tan(7);
    }
    //strict 模式中不允許 'with' 陳述式
})(); //16