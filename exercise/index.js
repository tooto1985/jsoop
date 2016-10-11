document.addEventListener("DOMContentLoaded", function() {
    var data = [15, 16, 11, 20, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, "9-2", 10]],
        hash = location.hash.substr(1),
        i, imax, j, jmax,
        option = document.createElement("option"),
        options,
        script = document.createElement("script"),
        select = document.createElement("select");
    select.appendChild(option);
    for (i = 0, imax = data.length; i < imax; i++) {
        var jmax = data[i];
        if (typeof data[i] !== "number") {
            jmax = data[i].length;
        }
        for (var j = 0; j < jmax; j++) {
            option = document.createElement("option");
            if (typeof data[i] === "number") {
                option.text = (i + 1) + "-" + (j + 1) + ".js";
            } else {
                option.text = (i + 1) + "-" + data[i][j] + ".js";
            }
            select.appendChild(option);
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