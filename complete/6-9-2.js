function Player(name) {
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function() {
    this.points += 1;
    mediator.played();
};
var scoreboard = {
    element: document.body,
    update: function(score) {
        var i, msg = "";
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += "<p><b>" + i + "</b>:";
                msg += score[i];
                msg += "</p>";
            }
        }
        this.element.innerHTML = msg;
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
        e = e || window.event;
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