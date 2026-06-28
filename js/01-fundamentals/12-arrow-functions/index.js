// Basics

const double = n => n * 2;

console.log(`Double of 5 = ${double(5)}`);

const sum = (a, b) => a + b;

for (let i = 0; i <= 10; i++) {
	console.log(`10 + ${i} = ${sum(10, i)}`);
}

function ask(question, yes, no) {
	if(confirm(question)) yes();
	else no();
}

ask(
	"Do you agree?",
	() => alert("You agreed."),
	() => alert("You canceled the execution.")
);