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

// TODO: Check for spam

const checkSpam = (str) => {
	const lowerStr = str.toLowerCase();

	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam("innocent rabbit") === false);

// TODO: Truncate the text

const truncate = (str, maxLength) => {
	if (!str || str.length <= maxLength) {
		return str;
	}

	return str.slice(0, maxLength) + "...";
}

console.log(truncate("Hi everyone!", 20) === "Hi everyone!"); // true
console.log(truncate("Hi everyone!", 10));