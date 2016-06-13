document.addEventListener("DOMContentLoaded", function() {
    var data = [15, 16, 11, 20, 11, 10],
        hash = location.hash.substr(1),
        i, imax, j, jmax, 
        option = document.createElement("option"), 
        options,
        script = document.createElement("script"),
        select = document.createElement("select");
    select.appendChild(option);
    for (i = 0, imax = data.length; i < imax; i++) {
        for (j = 1, jmax = data[i]; j <= jmax; j++) {
            option = document.createElement("option");
            option.text = (i + 1) + "-" + j + ".js";
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