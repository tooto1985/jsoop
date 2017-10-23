var cpu = {
    execute: function() {
        console.log("execute");
    }
};
var memory = {
    load: function() {
        console.log("load");
    }
};
var hdd = {
    write: function() {
        console.log("write");
    }
};
var computer = {
    work: function() {
        memory.load();
        cpu.execute();
        hdd.write();
    }
};
var user = {
    main: function() {
        computer.work(1);
        computer.work(2);
    }
}
user.main();