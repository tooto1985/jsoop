document.addEventListener("DOMContentLoaded", function() {
    var data = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "15-2"], 18, 11, 17, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, "9-2", 10], 33],
        hash = location.hash.substr(1),
        option = document.createElement("option"),
        script = document.createElement("script"),
        select = document.createElement("select"),
        prev = document.createElement("button"),
        next = document.createElement("button"),
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
        }
    }
    document.body.appendChild(prev);
    document.body.appendChild(select);
    document.body.appendChild(next);
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
    prev.innerText = "Prev";
    next.innerText = "Next";
    prev.addEventListener("click", function() {
        var ary = [].slice.call(options);
        var index = ary.indexOf(ary.filter(function(a) {
            return a.text == select.value;
        })[0])-1;
        if (index > -1) {
            select.value = ary[index].text;
            select.dispatchEvent(new Event("change"));
        }
    });
    next.addEventListener("click", function() {
        var ary = [].slice.call(options);
        var index = ary.indexOf(ary.filter(function(a) {
            return a.text == select.value;
        })[0])+1;
        if (index < ary.length) {
            select.value = ary[index].text;
            select.dispatchEvent(new Event("change"));
        }
    });    
});