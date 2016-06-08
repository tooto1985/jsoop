var data = {
    name: "Mary",
    message: "I am lucky!"
}; //資料封包
var Sender = function(strategy) {
    this.strategy = strategy;
}; //核心物件，利用建構式置入策略
Sender.prototype.send = function(data) {
    this.strategy.send(data);
}; //核心方法
var xmlStrategy = {
    send: function(data) {
        var str = "<xml><name>" + data.name + "</name><message>" + data.message + "</message></xml>";
        console.log("Data:" + str);
    }
}; //訂定策略-xmlStrategy
var jsonStrategy = {
    send: function(data) {
        console.log("Data:" + JSON.stringify(data));
    }
}; //訂定策略-jsonStrategy
var xmlSender = new Sender(xmlStrategy);
var jsonSender = new Sender(jsonStrategy);
xmlSender.send(data);
jsonSender.send(data);