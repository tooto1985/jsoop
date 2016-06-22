var car = {
    startEngine: function() {console.log("startEngine");},
    stopEngine: function() {console.log("stopEngine");},
    run: function() {console.log("run");}
};
function ProxyCar(car) {
    this.isStarted = false;
    this.startEngine = function() {
        
        
        
        
        
        
    };
    this.stopEngine = function() {
        
        
        
        
        
        
    };
    this.run = function() {
        
        
        
        
        
    };
}
var proxyCar = new ProxyCar(car);
proxyCar.run();
proxyCar.stopEngine();
proxyCar.startEngine();
proxyCar.run();