var data = {
    name: "Mary",
    message: "I am lucky!"
}; //資料封包
var Sender = function(strategy) {
    
}; //核心物件，利用建構式置入策略
Sender.prototype.send = function(data) {
    
}; //核心方法
var xmlStrategy = {
    
    
    
    
}; //訂定策略-xmlStrategy
var jsonStrategy = {
    
    
    
}; //訂定策略-jsonStrategy
var xmlSender = new Sender(xmlStrategy);
var jsonSender = new Sender(jsonStrategy);
xmlSender.send(data);
jsonSender.send(data);