var MessageCenter = {
    list: {},
    emit: function(type, message) {
        if (this.list[type]) {
            for (var i = 0; i < this.list[type].length; i++) {
                this.list[type][i].callback(message);
            }
        }
    },
    on: function(obj, type, callback) {
        this.list[type] = this.list[type] || [];
        this.list[type].push({
            obj: obj,
            callback: callback
        });
    },
    off: function(obj, type) {
        if (this.list[type]) {
            for (var i = 0; i < this.list[type].length; i++) {
                if (this.list[type][i].obj === obj) {
                    this.list[type].splice(i,1);
                    i--;
                }
            }
        }
    }
};
function User(messageCenter) {
    this.messageCenter = messageCenter;
}
User.prototype.addEvent = function(type, callback) {
    this.messageCenter.on(this, type, callback);
};
User.prototype.removeEvent = function(type) {
    this.messageCenter.off(this, type);
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
MessageCenter.emit("test", "Word");