// TODO: Uppercase the first character

const ucFirst = (str) => {
	if (!str) {
		return str;
	}

	const lower = str.toLowerCase();
	return lower.at(0).toUpperCase() + lower.slice(1);
}

console.log(ucFirst(""));
console.log(ucFirst("John Doe"));