var car = {
    startEngine: function() {console.log("startEngine");},
    stopEngine: function() {console.log("stopEngine");},
    run: function() {console.log("run");}
};
function ProxyCar(car) {
    var isStarted = false;
    this.startEngine = function() {
        if (isStarted) {
            console.log("It is already started!");
        } else {
            car.startEngine();
            isStarted = true;
        }
    };
    this.stopEngine = function() {
        if (!isStarted) {
            console.log("It is already stopped!");
        } else {
            car.stopEngine();
            isStarted = false;
        }
    };
    this.run = function() {
        if (!isStarted) {
            console.log("You have to start the engine first!");
        } else {
            car.run();
        }
    };
}
var proxyCar = new ProxyCar(car);
proxyCar.run(); //You have to start the engine first!
proxyCar.stopEngine(); //It is already stopped!
proxyCar.startEngine(); //startEngine
proxyCar.run(); //run