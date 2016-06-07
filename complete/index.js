document.addEventListener("DOMContentLoaded", function() {
    var data = [
            "", "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9",
            "1-10", "1-11", "1-12", "1-13", "1-14", "1-15", "2-1", "2-2", "2-3", "2-4",
            "2-5", "2-6", "2-7", "2-8", "2-9", "2-10", "2-11", "2-12", "2-13", "3-1",
            "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "3-9", "3-10"
        ],
        hash = location.hash.substr(1),
        i = 0,
        max,
        option,
        options,
        script = document.createElement("script"),
        select = document.createElement("select");
    for (i = 0, max = data.length; i < max; i++) {
        option = document.createElement("option");
        option.text = data[i] + (data[i] ? ".js" : "");
        select.appendChild(option);
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