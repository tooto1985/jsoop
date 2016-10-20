var add = (function() {
	var count=0;
	return function() {
		return count += 1;
	};
})();
console.log(add());
console.log(add());
console.log(add());
