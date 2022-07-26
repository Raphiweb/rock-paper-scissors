let computerChoice = "";
let playerChoice = "";

let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    computerChoice = "rock";
  } else if (num === 1) {
    computerChoice = "paper";
  } else computerChoice = "scissors";
  console.log(computerChoice);
}

function oneRound() {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors!");
    playerCounter++;
    updateStats();
    return "You win! Rock beats Scissors!";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerCounter++;
    updateStats();
    return "You lose! Scissors beats Paper!";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock!");
    playerCounter++;
    updateStats();
    return "You win! Paper beats Rock!";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerCounter++;
    updateStats();
    return "You lose! Rock beats Scissors!";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock!");
    computerCounter++;
    updateStats();
    return "You lose! Paper beats Rock!";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper!");
    playerCounter++;
    updateStats();
    return "You win! Scissors beats Paper!";
  } else if (playerChoice == computerChoice) {
    console.log("Tie!");
    return "Tie!";
  } else console.log("Error, try again!");
}

const rock = document.createElement("div");
const rockImg = document.createElement("button");
rockImg.classList.add("rock");
rock.appendChild(rockImg);

const paper = document.createElement("div");
const paperImg = document.createElement("button");
paperImg.classList.add("paper");
paper.appendChild(paperImg);

const scissors = document.createElement("div");
const scissorsImg = document.createElement("button");
scissorsImg.classList.add("scissors");
scissors.appendChild(scissorsImg);

arenaDiv = document.getElementsByClassName(".arena");

function game() {
  if (computerChoice == "rock") {
    removeChild();
    document.querySelector(".computer").appendChild(rock);
  } else if (computerChoice == "paper") {
    removeChild();
    document.querySelector(".computer").appendChild(paper);
  } else {
    removeChild();
    document.querySelector(".computer").appendChild(scissors);
  }
}

function rockFunc() {
  playerChoice = "rock";
  console.log(playerChoice + " (player)");
  arenaDiv.innerHTML = oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function paperFunc() {
  playerChoice = "paper";
  console.log(playerChoice + " (player)");
  arenaDiv.innerHTML = oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function scissorsFunc() {
  playerChoice = "scissors";
  console.log(playerChoice + " (player)");
  arenaDiv.innerHTML = oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function removeChild() {
  document.querySelector(".computer").innerHTML = "";
}
//
//
//
//
//
[
  document.querySelector(".rock"),
  document.querySelector(".paper"),
  document.querySelector(".scissors"),
].forEach((btn) => {
  btn.addEventListener("click", getComputerChoice);
  btn.addEventListener("click", game);
});

// initializing stats
updateStats();

// buttons on click
const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", rockFunc);

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", paperFunc);

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", scissorsFunc);

//

function updateStats() {
  const stats = document.getElementById("score");
  stats.textContent =
    "You: " + `${playerCounter}` + " vs. Computer: " + `${computerCounter}`;
  endGame();
}

//

const winScreen = document.createElement("div");
winScreen.style.width = "100vw";
winScreen.style.height = "100vh";
winScreen.style.position = "absolute";
winScreen.style.zIndex = "9999";
winScreen.style.backgroundColor = "white";

winScreen.textContent = "You win! Congratulations!";

const loseScreen = document.createElement("div");
loseScreen.style.width = "100vw";
loseScreen.style.height = "100vh";
loseScreen.style.position = "absolute";
loseScreen.style.zIndex = "9999";
loseScreen.style.backgroundColor = "white";

loseScreen.textContent = "You lose! Loser!";

function endGame() {
  if (playerCounter + computerCounter === 5) {
    if (playerCounter > computerCounter) {
      document.querySelector("body").appendChild(winScreen);
      console.log("yesss");
    } else if (playerCounter < computerCounter) {
      document.querySelector("body").appendChild(loseScreen);
      console.log("noooo");
    }
  }
}
