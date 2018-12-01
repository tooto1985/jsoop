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
//非同步同時完成
function fetchAll(tasks, success, error) {
    var results = Array(tasks.length);
    var count = 0;
    for (var i = 0; i < tasks.length; i++) {
        (function(i) {
            tasks[i](function(resolve, data) {
                if (resolve) {
                    count++;
                    results[i] = data;
                    if (count === tasks.length) {
                        success(results);
                    }
                } else {
                    error(data);
                }
            })
        })(i);
    }
}
fetchAll([
    function(cb) { asyncTask1(true, 1000, cb) },
    function(cb) { asyncTask1(true, 5000, cb) },
    function(cb) { asyncTask1(true, 2500, cb) }    
],function(data) {
    console.log("ok:", data);
},function(err) {
    console.log("err:", err);
});
//非同步依序完成
asyncTask1(true, 1000, function(resolve, data) {
    resolve && console.log("ok:", data);
    resolve && asyncTask1(true, 5000, function(resolve, data) {
        resolve && console.log("ok:", data);
        resolve && asyncTask1(true, 2500, function(resolve, data) {
            resolve && console.log("ok:", data);
        });
    });
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
//非同步同時完成
Promise.all([
    asyncTask2(true, 1000),
    asyncTask2(true, 5000),
    asyncTask2(true, 2500)
]).then(data => {
    console.log("ok:", data);
}, err => {
    console.log("err:", err);
});
//非同步依序完成
asyncTask2(true, 1000).then(result => {
    console.log(result);
    return asyncTask2(true, 5000);
}).then(result => {
    console.log(result);
    return asyncTask2(true, 2500);
}).then(result => {
    console.log(result);
    console.log("依序完成");
}).catch(err => {
    console.log("err:" + err);
});
//es7的Async和Await用法
(async () => {
    console.log("begin");
    var a = await asyncTask2(true, 1000);
    console.log("ok:", a);
    var b = await asyncTask2(true, 5000);
    console.log("ok:", b);
    var c = await asyncTask2(true, 2500);
    console.log("ok:", c);
    console.log("end");
})()
console.log("other code");