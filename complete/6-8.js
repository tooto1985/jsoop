var car = {
    start: function() {console.log("發動");},
    stop: function() {console.log("關閉");},
    run: function() {console.log("加速");}
};
function ProxyCar(car) {
    var isStarted = false;
    this.start = function() {
        if (isStarted) {
            console.log("引擎已經發動");
        } else {
            car.start();
            isStarted = true;
        }
    };
    this.stop = function() {
        if (!isStarted) {
            console.log("引擎已經關閉");
        } else {
            car.stop();
            isStarted = false;
        }
    };
    this.run = function() {
        if (!isStarted) {
            console.log("尚未發動引擎");
        } else {
            car.run();
        }
    };
}
var proxyCar = new ProxyCar(car);
proxyCar.run(); //尚未發動引擎
proxyCar.stop(); //引擎已經關閉
proxyCar.start(); //發動
proxyCar.run(); //加速