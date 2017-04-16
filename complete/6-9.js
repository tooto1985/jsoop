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
        var msg = "";
        for (var i in score) {
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
    setUp: function() {
        var Players = this.Players;
        Players.home = new Player("Home");
        Players.guest = new Player("Guest");
    },
    played: function() {
        var Players = this.Players,
            score = {
                Home: Players.home.points,
                Guest: Players.guest.points
            };
        scoreboard.update(score);
    },
    keypress: function(e) {
        if (e.keyCode === 48) {
            mediator.Players.home.play();
            return;
        }
        if (e.keyCode === 49) {
            mediator.Players.guest.play();
            return;
        }
    }
};
mediator.setUp();
window.onkeypress = mediator.keypress;