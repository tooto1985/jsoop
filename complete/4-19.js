var json = {
    a: 12,
    show: function() {
        console.log(this.a);
    },
    b: json.a
};
json.show();
json.b;