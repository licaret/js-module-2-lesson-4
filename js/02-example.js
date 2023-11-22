// Write a function min(a,b) that returns the smaller of the numbers a and b.

const min = function(a, b) {
	// return Math.min(a, b);

	// if (a > b) {
	// 	return b;
	// }
	// return a;

	return a > b ? b : a;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1