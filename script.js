const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return options[Math.round(Math.random() * 2) + 0];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // player = rock
  if (player.localeCompare("rock") === 0) {
    if (computer.localeCompare("rock") === 0) {
      return "Draw!";
    } else if (computer.localeCompare("paper") === 0) {
      return "You lose! Paper beats rock!";
    } else {
      return "You win! Rock beats scissors!";
    }
  } //player = paper
  else if (player.localeCompare("paper") === 0) {
    if (computer.localeCompare("rock") === 0) {
      return "You win! Paper beats rock!";
    } else if (computer.localeCompare("paper") === 0) {
      return "Draw!";
    } else {
      return "You lose! Scissor beats paper!";
    }
  } //player = scissors
  else {
    if (computer.localeCompare("rock") === 0) {
      return "You lose! Rock beats scissor";
    } else if (computer.localeCompare("paper") === 0) {
      return "You win! Scissor beats paper";
    } else {
      return "Draw!";
    }
  }
}

// console.log(getComputerChoice());
playerSelection = window.prompt("Enter your choice!");
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  console.log(
    "Player = " + playerSelection + ", Computer = " + computerSelection
  );
  console.log(playRound(playerSelection, computerSelection));
}
