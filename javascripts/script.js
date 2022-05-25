// *1. initialize player selection
let playerSelection;
let computerSelection;

// *2 initialize player Score and Compute Score
let playerScore = 0;
let computerScore = 0;

// *3 initialize computerSelections
const computerSelections = Object.freeze({
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
});

// *3 Generate Compute Selection
/**Generate Randomly Computer Selection
 * @return {string} rock or paper or scissor
 */
function getComputerSelection() {
  // * Three shapes Rock, Paper, Scissor
  randomShape = Math.floor(
    Math.random() * Object.keys(computerSelections).length
  );
  return computerSelections[Object.keys(computerSelections)[randomShape]];
}

// *4 Check result of single round Compute Vs player
/**Simulate one round of Rock, Paper, Scissor Game
 * @param  {string} playerSelection rock, paper, scissor
 * @param  {string} computerSelection rock, paper, scissor
 * @return {string} Display the result of the round
 */
function playRound(playerSelection, computerSelection) {
  // * undefined or empty string
  if (playerSelection === undefined || playerSelection === "") {
    console.log("You must enter your Choice to play");
    return "You must enter your choice to play";
  }

  // * Tie
  if (playerSelection === computerSelection) {
    console.log(
      `Tie! playerSelection: ${playerSelection} and computerSelection: ${computerSelection}`
    );
    return `Tie! playerSelection: ${playerSelection} and computerSelection: ${computerSelection}`;
  }

  // *UnTie
  switch (computerSelection) {
    case computerSelections.ROCK:
      // *Player lose
      if (playerSelection === "scissor") {
        console.log(
          `You Lose! ${computerSelections.ROCK} beats ${playerSelection}`
        );
        computerScore++;
        return `You Lose! ${computerSelections.ROCK} beats ${playerSelection}`;
      }

      // *Player win
      if (playerSelection === "paper") {
        console.log(
          `You Win! ${playerSelection} beats ${computerSelections.ROCK}`
        );
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelections.ROCK}`;
      }
      break;

    case computerSelections.PAPER:
      // *Player lose
      if (playerSelection === "rock") {
        console.log(
          `You Lose! ${computerSelections.PAPER} beats ${playerSelection}`
        );
        computerScore++;
        return `You Lose! ${computerSelections.PAPER} beats ${playerSelection}`;
      }

      // *Player win
      if (playerSelection === "scissor") {
        console.log(
          `You Win! ${playerSelection} beats ${computerSelections.PAPER}`
        );
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelections.PAPER}`;
      }
      break;

    case computerSelections.SCISSOR:
      // *Player lose
      if (playerSelection === "paper") {
        console.log(
          `You Lose! ${computerSelections.SCISSOR} beats ${playerSelection}`
        );
        computerScore++;
        return `You Lose! ${computerSelections.SCISSOR} beats ${playerSelection}`;
      }

      // *Player win
      if (playerSelection === "rock") {
        console.log(
          `You Win! ${playerSelection} beats ${computerSelections.SCISSOR}`
        );
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelections.SCISSOR}`;
      }
      break;

    default:
      break;
  }
}
// /**Start the game
//  * @param  {number} rounds number of rounds to play
//  */
// function startGame(rounds) {
//   for (let index = 0; index < rounds; index++) {
//     playerSelection = prompt("What is you choice ?")?.toLowerCase();
//     computerSelection = getComputerSelection();
//     playRound(playerSelection, computerSelection);
//   }

//   checkTotalScores();
//   resetGame();
// }

/**Check the total scores after n rounds
 */
function checkTotalScores() {
  if (computerScore > playerScore) {
    console.log("Computer Win");
  } else if (computerScore < playerScore) {
    console.log("Player Win");
  } else {
    console.log("Computer and Player Tie");
  }
}

/**Reset the game to original state
 */
function resetGame() {
  playerSelection = "";
  computerSelection = "";
  playerScore = 0;
  computerScore = 0;
}

startGame(3);
