var messageCenter = {
    events: {},
    emit: function(type, message) {
        if (this.events[type]) {
            for (var i = 0; i < this.events[type].length; i++) {
                this.events[type][i].callback(message);
            }
        }
    },
    on: function(obj, type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push({
            obj: obj,
            callback: callback
        });
    },
    off: function(obj, type) {
        if (this.events[type]) {
            for (var i = 0; i < this.events[type].length; i++) {
                if (this.events[type][i].obj === obj) {
                    this.events[type].splice(i,1);
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
var UserA = new User(messageCenter);
UserA.addEvent("todo", function(msg) {
    console.log("UserA todo:" + msg);
});
UserA.addEvent("test", function(msg) {
    console.log("UserA test:" + msg);
});
var UserB = new User(messageCenter);
UserB.addEvent("todo", function(msg) {
    console.log("UserB todo:" + msg);
});
var UserC = new User(messageCenter);
UserC.addEvent("test", function(msg) {
    console.log("UserC test:" + msg);
});
messageCenter.emit("todo", "News");
messageCenter.emit("test", "Word");