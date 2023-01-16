const choices = ["rock", "paper", "scissors"];
let winners = [];
const resetGame = () => {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
};

const startGame = () => {
  //play until someone wins 5x
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
};

const playRound = (playerChoice) => {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    //display end reults
    //change the button to visible
    //change the text to display winner
    displayEnd();
  }
};
const displayEnd = () => {
  let playerWins = winners.filter((winner) => winner == "user").length;
  if (playerWins == 5) {
    document.querySelector(".winner").textContent = `You won 5 rounds!`;
  } else {
    document.querySelector(".winner").textContent = `Comp won 5 rounds HAHA`;
  }
  document.querySelector(".reset").style.display = "flex";
};
const displayRound = (playerChoice, computerChoice, winner) => {
  document.querySelector(
    ".playerChoice"
  ).textContent = `You chose: ${playerChoice}`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `Comp chose: ${computerChoice}`;
  displayRoundWinner(winner);
};
const displayRoundWinner = (winner) => {
  if (winner == "user") {
    document.querySelector(".winner").textContent = "You won the round";
  } else if (winner == "computer") {
    document.querySelector(".winner").textContent = "Comp won the round";
  } else {
    document.querySelector(".winner").textContent = "The round was a tie";
  }
};

const tallyWins = () => {
  const playerWins = winners.filter((winner) => winner == "user").length;
  const compWins = winners.filter((winner) => winner == "computer").length;
  const ties = winners.filter((winner) => winner == "tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
  document.querySelector(".computerScore").textContent = `Score: ${compWins}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
};

const computerSelect = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};
const checkWins = () => {
  const playerWins = winners.filter((winner) => winner == "user").length;
  const compWins = winners.filter((winner) => winner == "computer").length;
  return Math.max(playerWins, compWins);
};

const validateInput = (choice) => {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
};

const checkWinner = (choiceP, choiceC) => {
  if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "user";
  } else if (choiceP == choiceC) {
    return "tie";
  } else {
    return "computer";
  }
};
const logWins = () => {
  const playerWins = winners.filter((winner) => winner == "user").length;
  const compWins = winners.filter((winner) => winner == "computer").length;
  const ties = winners.filter((winner) => winner == "tie").length;
};
startGame();
