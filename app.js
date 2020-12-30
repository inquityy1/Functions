const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
	const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
	if (
		selection !== ROCK &&
		selection !== PAPER &&
		selection !== SCISSORS
	) {
		alert(`Invalid choice! We chose ${ROCK} for you!`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
};



const getComputerChoce = function () {
	const randomValue = Math.random();
	if (randomValue < 0.33) {
		return ROCK;
	} else if (randomValue < 0.66) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

startGameBtn.addEventListener('click', function() {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerSelection = getPlayerChoice();
	console.log(playerSelection);
	const computerChoice = getComputerChoce();
});