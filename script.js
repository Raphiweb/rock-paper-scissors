function oneRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper!";
  } else if (playerSelection == computerSelection) {
    return "Tie!";
  } else return "Error, try again!";
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else return "scissors";
}

function getPlayerChoice() {
  return prompt("Enter either rock, paper or scissors", "");
}

function game() {
  let playerCount = 0;
  let computerCount = 0;

  // looping 5 rounds through
  for (let i = 0; i < 5; i++) {
    let choice = getComputerChoice().toLowerCase();
    console.log(choice);

    let playerChoice = getPlayerChoice().toLowerCase();
    console.log(playerChoice);

    console.log(oneRound(playerChoice, choice));

    if (oneRound(playerChoice, choice).includes("win")) {
      playerCount++;
    } else if (oneRound(playerChoice, choice).includes("lose")) {
      computerCount++;
    }
    // round counter i not going up if error (e.g. misspelling)
    else if (oneRound(playerChoice, choice).includes("Error")) {
      i--;
    }
  }
  // logging final counts
  console.log(playerCount);
  console.log(computerCount);

  if (playerCount > computerCount) {
    alert("You win!");
  } else if (playerCount === computerCount) {
    alert("Tie!");
  } else alert("You lose!");
}

// computer's choice
let choice;
let playerChoice;

game();
