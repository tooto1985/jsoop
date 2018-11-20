var data = {
    name: "Mary",
    message: "I am lucky!"
}; //資料封包
function Sender(strategy) {
    this.strategy = strategy;
}; //核心物件，利用建構式置入策略
Sender.prototype.send = function(data) {
    return this.strategy.send(data);
}; //核心方法
var xmlStrategy = {
    send: function(data) {
        var str = "<xml><name>" + data.name + "</name><message>" + data.message + "</message></xml>";
        return str;
    }
}; //訂定策略-xmlStrategy
var jsonStrategy = {
    send: function(data) {
        var str = JSON.stringify(data);
        return str;
    }
}; //訂定策略-jsonStrategy
var sender = new Sender(xmlStrategy);
var result = sender.send(data);
console.log(result);