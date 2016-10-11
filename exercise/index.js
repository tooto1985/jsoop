document.addEventListener("DOMContentLoaded", function() {
    var data = [15, 16, 11, 20, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, "9-2", 10]],
        hash = location.hash.substr(1),
        option = document.createElement("option"),
        script = document.createElement("script"),
        select = document.createElement("select"),
        i, imax, j, jmax, o, options;
    select.appendChild(option);
    for (i = 0, imax = data.length; i < imax; i++) {
        jmax = data[i];
        if (typeof data[i] !== "number") {
            jmax = data[i].length;
        }
        for (j = 0; j < jmax; j++) {
            option = document.createElement("option");
            o = {
                main: i + 1,
                sub: j + 1
            };
            if (data[i] instanceof Array) {
                o.sub = data[i][j];
            }
            o.value = o.main + "-" + o.sub;
            option.text = o.value + ".js";
            select.appendChild(option);
            Object.defineProperty(window, "to" + o.value.replace("-", "_"), {
                get: function(o) {
                    location.hash = o.value + ".js";
                    location.reload();
                }.bind(this, o)
            });
        }
    }
    document.body.appendChild(select);
    options = select.options;
    if (hash) {
        script.src = hash;
        document.getElementsByTagName("head")[0].appendChild(script);
        for (i = 0, imax = options.length; i < imax; i++) {
            if (options[i].text === hash) {
                options[i].selected = true;
            }
        }
    }
    select.addEventListener("change", function() {
        location.href = location.href.split("#")[0] + "#" + this.value;
        location.reload();
    });
});