function Player(name) {
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function() {
    this.points += 1;
    mediator.played();
};
var scoreboard = {
    el: document.body,
    update: function(score) {
        var msg = "";
        for (var i in score) {
            if (score.hasOwnProperty(i)) {
                msg += "<p><b>" + i + "</b>:";
                msg += score[i];
                msg += "</p>";
            }
        }
        this.el.innerHTML = msg;
    }
};
var mediator = {
    Players: {},
    add: function(key, obj) {
        this.Players[obj.name] = {
            key: key,
            obj: obj
        };
    },
    played: function() {
        var score = {};
        for (var player in this.Players) {
            score[player] = this.Players[player].obj.points;
        }
        scoreboard.update(score);
    },
    keypress: function(e) {
        for (var player in mediator.Players) {
            player = mediator.Players[player];
            if (e.keyCode === player.key) {
                player.obj.play();
                return;
            }
        }
    }
};
mediator.add(48, new Player("Home"));
mediator.add(49, new Player("Guest"));
mediator.add(50, new Player("Other"));
mediator.add(51, new Player("Mark"));
mediator.add(52, new Player("John"));
window.onkeypress = mediator.keypress;