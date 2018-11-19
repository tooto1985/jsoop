var car = {
    start: function() {console.log("發動");},
    stop: function() {console.log("關閉");},
    run: function() {console.log("加速");}
};
function ProxyCar(car) {
    var isStart = false;
    this.start = function() {
        if (isStart) {
            console.log("引擎已經發動");
        } else {
            car.start();
            isStart = true;
        }
    };
    this.stop = function() {
        if (!isStart) {
            console.log("引擎已經關閉");
        } else {
            car.stop();
            isStart = false;
        }
    };
    this.run = function() {
        if (!isStart) {
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