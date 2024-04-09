let randomNumber = Math.floor(Math.random() * 6) + 1;
let getComputerChoice;

if (randomNumber === 1 || randomNumber === 5) {
  getComputerChoice = "rock";
} else if (randomNumber === 2 || randomNumber === 6) {
  getComputerChoice = "paper";
} else if (randomNumber === 3 || randomNumber === 4) {
  getComputerChoice = "scissor";
}

let count = 0;

function playRound(input, computerSelection) {
  if (!["rock", "paper", "scissor"].includes(input)) {
    console.log(input, "is invalid input");
    return "invalid";
  }
  if (input === computerSelection) {
    console.log("You tie");
    return "tie";
  } else if (
    (input === "rock" && computerSelection === "paper") ||
    (input === "paper" && computerSelection === "scissor") ||
    (input === "scissor" && computerSelection === "rock")
  ) {
    console.log("YOU:", input, "  COMP:", computerSelection, "---You lose");
    return "lose";
  } else {
    count += 1;

    console.log("YOU:", input, "  COMP:", computerSelection, "---You win");
    console.log("Continue...");
    return "win";
  }
}

let computerSelection = getComputerChoice;
let input;
let result;

do {
  input = prompt("Input rock, paper, or scissor to play the game:");
  let i = input.toLowerCase();
  result = playRound(i, computerSelection);
} while (result === "win");
console.log("Count:", count);

console.log("Game ended.");
