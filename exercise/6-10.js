var MessageCenter = {
    list: {},
    emit: function(type, message) {
        if (this.list[type]) {
            for (var i = 0; i < this.list[type].length; i++) {
                this.list[type][i](message);
            }
        }
    },
    on: function(type, callback) {
        this.list[type] = this.list[type] || [];
        this.list[type].push(callback);
    }
};
function User(messageCenter) {
    this.messageCenter = messageCenter;
}
User.prototype.addEvent = function(type, callback) {
    this.messageCenter.on(type, callback);
};
var UserA = new User(MessageCenter);
UserA.addEvent("todo", function(msg) {
    console.log("UserA todo:" + msg);
});
UserA.addEvent("test", function(msg) {
    console.log("UserA test:" + msg);
});
var UserB = new User(MessageCenter);
UserB.addEvent("todo", function(msg) {
    console.log("UserB todo:" + msg);
});
var UserC = new User(MessageCenter);
UserC.addEvent("test", function(msg) {
    console.log("UserC test:" + msg);
});
MessageCenter.emit("todo", "News");