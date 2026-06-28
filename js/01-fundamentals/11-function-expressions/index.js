// Functions expression

const sayHi = function (name) {
	console.log(`Hello ${name}.`);
}

sayHi("Konan Bernard");

// The function is a value

console.log("value of function: ", sayHi);

let func = sayHi;
func("Kouassi");

// Callback functions
/**
 *
 * @param {string} question
 * @param {function} yes
 * @param {function} no
 * @returns {void}
 */
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

function showOk() {
	alert("You agreed.");
}

function showCancel() {
	alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// Authorization

function authorizeUser(question, callback) {
	let age = Number(prompt(question));

	if (age >= 18) {
		callback();
	}
}

authorizeUser("Your age: ", function () {
	console.log("You can access to the website.");
});