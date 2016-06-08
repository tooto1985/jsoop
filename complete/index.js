document.addEventListener("DOMContentLoaded", function() {
    var data = [15, 16, 11, 20, 11, 10],
        hash = location.hash.substr(1),
        i = 0,
        j = 1,
        max,
        option = document.createElement("option"),
        options,
        script = document.createElement("script"),
        select = document.createElement("select");
    select.appendChild(option);
    for (i = 0, max = data.length; i < max; i++) {
        for (j = 1; j <= data[i]; j++) {
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
        for (i = 0, max = options.length; i < max; i++) {
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