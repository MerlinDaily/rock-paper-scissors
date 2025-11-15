function getComputerChoice() {
	let rando = Math.floor(Math.random() * 10);
	let choice;

	rando <= 3
		? (choice = "rock")
		: rando <= 6
		? (choice = "paper")
		: (choice = "scissors");

	return choice;
}

//TODO: Handle input error,
function getHumanChoice() {
	const choice = prompt("Rock-Paper-Scissors?", "paper").toLowerCase();
	return choice;
}

let comChoice;
let userChoice;
let gameState;
let userScore = 0;
let comScore = 0;

function playRound(comChoice, userChoice) {
	comChoice = getComputerChoice();
	userChoice = getHumanChoice();
	gameState = "";

	console.info(`COM: ${comChoice} VS Player: ${userChoice}`);

	(comChoice == "rock" && userChoice == "paper") ||
	(comChoice == "paper" && userChoice == "scissors") ||
	(comChoice == "scissors" && userChoice == "rock")
		? (gameState = "win")
		: comChoice === userChoice
		? (gameState = "tie")
		: (gameState = "lose"); // || console.log("whut");

	gameState == "win"
		? userScore++
		: gameState == "lose"
		? comScore++
		: (userScore += 0) && (comScore += 0);

	console.log(
		`You ${gameState}! ${userChoice} ${gameState}s over ${comChoice}`
	);
	console.log(`Player: ${userScore}\nCOM: ${comScore}`);
}

function showResult() {
	userScore > comScore
		? console.log(`GAME WON`)
		: userScore < comScore
		? console.log(`GAME LOST`)
		: console.log(TIE);
}

function playGame() {
	for (let i = 1; i <= 5; i++) {
		console.log(`Round ${i}: GO!`);

		playRound();
	}
}

playGame();
showResult();
