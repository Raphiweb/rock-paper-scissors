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
    arenaTextFill("You win! Rock beats Scissors!");
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerCounter++;
    updateStats();
    arenaTextFill("You lose! Scissors beats Paper!");
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock!");
    playerCounter++;
    updateStats();
    arenaTextFill("You win! Paper beats Rock!");
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerCounter++;
    updateStats();
    arenaTextFill("You lose! Rock beats Scissors!");
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock!");
    computerCounter++;
    updateStats();
    arenaTextFill("You lose! Paper beats Rock!");
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper!");
    playerCounter++;
    updateStats();
    arenaTextFill("You win! Scissors beats Paper!");
  } else if (playerChoice == computerChoice) {
    console.log("Tie!");
    arenaTextFill("Tie!");
  } else console.log("Error, try again!");
}

// inner text for arena
const refreshedTextDiv = document.createElement("div");

const counterDiv = document.querySelector(".counter");
const arenaDiv = document.querySelector(".arena");

function arenaTextFill(arenaText) {
  refreshedTextDiv.classList.add("text", "fade");
  arenaDiv.removeChild(arenaDiv.firstElementChild);
  arenaDiv.insertBefore(refreshedTextDiv, counterDiv);
  refreshedTextDiv.innerText = arenaText;
  requestAnimationFrame(() => {
    refreshedTextDiv.classList.remove("fade");
  });
}

// create computer choice buttons
const rock = document.createElement("div");
const rockImg = document.createElement("button");
rockImg.classList.add("rock");
rockImg.classList.add("computerChoiceInArena");
rock.appendChild(rockImg);

const paper = document.createElement("div");
const paperImg = document.createElement("button");
paperImg.classList.add("paper");
paperImg.classList.add("computerChoiceInArena");
paper.appendChild(paperImg);

const scissors = document.createElement("div");
const scissorsImg = document.createElement("button");
scissorsImg.classList.add("scissors");
scissorsImg.classList.add("computerChoiceInArena");
scissors.appendChild(scissorsImg);

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
  oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function paperFunc() {
  playerChoice = "paper";
  console.log(playerChoice + " (player)");
  oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function scissorsFunc() {
  playerChoice = "scissors";
  console.log(playerChoice + " (player)");
  oneRound();
  console.log(playerCounter + " (player)");
  console.log(computerCounter + " (comp)");
}

function removeChild() {
  document.querySelector(".computer").innerText = "";
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

// winning screen
const winScreen = document.createElement("div");
winScreen.classList.add("winScreen");

// losing screen
const loseScreen = document.createElement("div");
loseScreen.classList.add("loseScreen");

const winPara = document.createElement("p");
winPara.textContent = "You win! Congratulations!";
winScreen.appendChild(winPara);

const losePara = document.createElement("p");
losePara.textContent = "You lose! Loser!";
loseScreen.appendChild(losePara);

// lose/win button
const repeatButtonWin = document.createElement("button");
repeatButtonWin.classList.add("repeat");
repeatButtonWin.textContent = "Rematch!";

const repeatButtonLose = document.createElement("button");
repeatButtonLose.classList.add("repeat");
repeatButtonLose.textContent = "Rematch!";

winScreen.appendChild(repeatButtonWin);
loseScreen.appendChild(repeatButtonLose);

function endGame() {
  if (playerCounter + computerCounter === 5) {
    if (playerCounter > computerCounter) {
      document.body.prepend(winScreen);
    } else if (playerCounter < computerCounter) {
      document.body.prepend(loseScreen);
    }
  }
}

// repeat button
repeatButtonWin.addEventListener("click", backToStart);
repeatButtonWin.addEventListener("click", resetStats);
repeatButtonLose.addEventListener("click", backToStart);
repeatButtonLose.addEventListener("click", resetStats);

function backToStart() {
  if (document.body.contains(winScreen)) {
    document
      .querySelector("body")
      .removeChild(document.querySelector(".winScreen"));
  } else if (document.body.contains(loseScreen)) {
    document
      .querySelector("body")
      .removeChild(document.querySelector(".loseScreen"));
  }
}

function resetStats() {
  playerCounter = 0;
  computerCounter = 0;
  updateStats();
  arenaTextFill("");
}
