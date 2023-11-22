/*
	Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides,
	the values of which will be passed to the dimensions parameter as a string. 
	Values are guaranteed to be separated by a space.
*/

function getRectArea(dimensions = "") {
	const data = dimensions.split(" "); // ["8", "11"]
	const width = Number(data[0]);
	const height = Number(data[1]);
	return width * height;
}

console.log(getRectArea('8 11'));