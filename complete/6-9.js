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
    users: {},
    init: function() {
        this.users.home = new Player("Home");
        this.users.guest = new Player("Guest");
    },
    played: function() {
        var score = {
            Home: this.users.home.points,
            Guest: this.users.guest.points
        };
        scoreboard.update(score);
    },
    keypress: function(e) {
        if (e.keyCode === 48) {
            mediator.users.home.play();
            return;
        }
        if (e.keyCode === 49) {
            mediator.users.guest.play();
            return;
        }
    }
};
mediator.init();
window.onkeypress = mediator.keypress;