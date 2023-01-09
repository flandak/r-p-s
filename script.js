const choices = ["rock", "paper", "scissors"];
const winners = [];
const resetGame = () => {};
// const game = () => {
// };

const startGame = () => {
    //play until someone wins 5x
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
        img.addEventListener("click", () => {
            if (img.id) {
                playRound(img.id);
            }
        })
    );
};

btn2.addEventListener("click", playRound);
btn3.addEventListener("click", playRound);
btn1.addEventListener("click", playRound);

const playRound = (playerChoice) => {
  let wins = checkWins();
  if (wins >= 5){
    return
  }
    // const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    // console.log(`Computer threw ${computerSelection}`);
    // console.log(winner);
};

const computerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
}
const checkWins = () =>{
  const playerWins = winners.filter((winner) => winner == "you won!").length;
  const computerWins = winners.filter((winner) => winner == "computer won HAHA").length;
  return Math.max(playerWins,computerWins)
}
// let playerChoice = () => {
//   let input = prompt("Type rock, paper or scissors");
//   input = input.toLowerCase();
//   while (input == null) {
//     input = prompt("Type rock, paper or scissors");
//   }
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt(
//       "type rock, paper or scissors exactly. You do not need to use capitalization"
//     );
//     while (input == null) {
//       input = prompt("type rock, paper, or scissors");
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// };

const validateInput = (choice) => {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
};

const checkWinner = (choiceP, choiceC) => {
    if (choiceP === choiceC) {
        return "The game ended in a tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "rock")
    ) {
        return "you won!";
    } else {
        return "computer won HAHA";
    }
};
const logWins = () => {
    const playerWins = winners.filter((winner) => winner == "you won!").length;
    const computerWins = winners.filter(
        (winner) => winner == "computer won HAHA"
    ).length;
    const ties = winners.filter(
        (winner) => winner == "The game ended in a tie"
    ).length;
};
startGame();
