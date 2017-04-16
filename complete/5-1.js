function show(a, b) {
	console.log(this, a, b);
}
//show(5,10);
show.call({}, 5, 10);