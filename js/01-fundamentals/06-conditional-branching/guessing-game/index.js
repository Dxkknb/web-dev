// Constants

const MIN_GUESSED_NUMBER = 1;
const MAX_GUESSED_NUMBER = 10;

/**
 * Saves all parts of the game
 * @typedef Game {{id: number, rounds: number, score: number}}
 * @type {Game[]}
 */
const games = [];

const user = {
	name: "",
	gameIds: []
};

/**
 * Generate a random number between min_number and max_number
 * @param {number} min_number
 * @param {number} max_number
 */
function generateRandomNumber(min_number, max_number) {
	return min_number + Math.floor(Math.random() * (max_number - min_number + 1));
}

/**
 * Retrieves the user’s input, or returns null otherwise
 * @returns {number|null}
 */
function getGuessedNumber () {
	const guessedNumber =
		prompt(`Guess the number between ${MIN_GUESSED_NUMBER} and ${MAX_GUESSED_NUMBER}: `, '');

	if (isNaN(Number(guessedNumber))) {
		alert("Wrong number format.");
		return null;
	}

	return Number(guessedNumber);
}

/**
 * Returns the user’s name, or null otherwise
 * @returns {null|string}
 */
function getUsername() {
	let username = prompt("Enter your name: ", '');

	if (username) {
		return username;
	}

	return null;
}



/**
 * Display all games info in the console
 * @returns {void}
 */
function showGamesInfos() {
	console.log(`User: ${user.name}`);

	if (games.length) {
		games.forEach((game) => {
			console.log(`
Game N°${game.id}
Rounds: ${game.rounds}
Score: ${game.score}
`);
		});
	}
}

/**
 * The starting point of the game
 * @returns {void}
 */
function playGame() {
	// Set username
	const username = getUsername();

	if (username) {
		user.name = username.toLowerCase();
	} else {
		alert("Invalid username!\nRetry!");
		return;
	}

	// Start the game
	let game = {
		id: 1,
		rounds: 0,
		score: 0
	};
	let continueOrNot = null;
	let guessingNumber = generateRandomNumber(MIN_GUESSED_NUMBER, MAX_GUESSED_NUMBER);

	while (true) {
		const guessedNumber = getGuessedNumber();

		if (guessedNumber === null) {
			alert("Wrong number format provided!");
			return ;
		}

		if (guessedNumber < guessingNumber) {
			alert("Too low!");
			game.rounds++;
		} else if ((guessedNumber > guessingNumber)) {
			alert("Too high!");
			game.rounds++;
		} else {
			alert("You win 1pt!");
			game.rounds++;
			game.score += 1;

			const response = prompt("Would you want to continue ? (o/n): ");
			continueOrNot = response ? response.toLowerCase(): 'n';
		}

		if (continueOrNot === 'o') {
			alert("New Game started!");

			games.push(game);
			user.gameIds.push(game.id);

			guessingNumber = generateRandomNumber(MIN_GUESSED_NUMBER, MAX_GUESSED_NUMBER);
			game = {
				id: user.gameIds.length + 1,
				rounds: 0,
				score: 0,
			}
		} else if (continueOrNot === 'n') {
			games.push(game);
			user.gameIds.push(game.id);
			alert("End of game!");
			break;
		}

		continueOrNot = null;
	}
}


playGame();
showGamesInfos();

