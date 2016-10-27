//es5
function asyncTask1(success, time, callback) {
    setTimeout(function() {
        if (success) {
            callback(true, time);
        } else {
            callback(false, time);
        }
    }, time);
}
function fetchAll(tasks, success, error) {
    var results = Array(tasks.length);
    var count = 0;
    for (var i = 0; i < tasks.length; i++) {
        (function(i) {
            asyncTask1(tasks[i].success, tasks[i].time, function(resolve, data) {
                if (resolve) {
                    count++;
                    results[i] = data;
                    if (count === tasks.length) {
                        success(results);
                    }
                } else {
                    error(data);
                }
            });
        })(i);
    }
}
fetchAll([
    {success:true, time:1000},
    {success:true, time:5000},
    {success:true, time:2500},
],function(data) {
    console.log("ok:", data);
},function(err) {
    console.log("err:", err);
});
//es6
function asyncTask2(success, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(time);
            } else {
                reject(time);
            }
        }, time);
    });
}
Promise.all([
    asyncTask2(true, 1000),
    asyncTask2(true, 5000),
    asyncTask2(true, 2500)
]).then(data => {
    console.log("ok:", data);
}, err => {
    console.log("err:", err);
});