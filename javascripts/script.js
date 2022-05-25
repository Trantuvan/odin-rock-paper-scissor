const handList = document.querySelectorAll(".hand");
const newGame = document.querySelector(".newGame");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const computerSelections = Object.freeze({
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
});

const imageLinks = Object.freeze({
  ROCK: "./assets/img/Rock.png",
  PAPER: "./assets/img/Paper.png",
  SCISSOR: "./assets/img/Scissors.png",
});

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

/**Simulate one round of Rock, Paper, Scissor Game
 * @param  {string} playerSelection rock, paper, scissor
 * @param  {string} computerSelection rock, paper, scissor
 */
function playRound(playerSelection, computerSelection) {
  let decision = document.querySelector(".decision > h1");
  let playerImage = document.querySelector(".userPickImage");
  let computerImage = document.querySelector(".computerPickImage");

  // * Tie
  if (playerSelection === computerSelection) {
    decision.textContent = "It's a tie!";
    playerImage.src = imageLinks[playerSelection.toUpperCase()];
    computerImage.src = imageLinks[computerSelection.toUpperCase()];

    return;
  }

  // *UnTie
  switch (computerSelection) {
    case computerSelections.ROCK:
      // *Player lose
      if (playerSelection === "scissor") {
        decision.textContent = "You Lose!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++computerScore;
        break;
      }

      // *Player win
      if (playerSelection === "paper") {
        decision.textContent = "You Win!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++playerScore;
        break;
      }

    case computerSelections.PAPER:
      // *Player lose
      if (playerSelection === "rock") {
        decision.textContent = "You Lose!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++computerScore;
        break;
      }

      // *Player win
      if (playerSelection === "scissor") {
        decision.textContent = "You Win!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++playerScore;
        break;
      }

    case computerSelections.SCISSOR:
      // *Player lose
      if (playerSelection === "paper") {
        decision.textContent = "You Lose!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++computerScore;
        break;
      }

      // *Player win
      if (playerSelection === "rock") {
        decision.textContent = "You Win!";
        playerImage.src = imageLinks[playerSelection.toUpperCase()];
        computerImage.src = imageLinks[computerSelection.toUpperCase()];
        ++playerScore;
        break;
      }

    default:
      break;
  }
}

/**Start 1 round when user clicks on 1 in 3 choice
 * @param  {clickEvent} evt Click event
 */
function startGame(evt) {
  let runningScore = document.querySelector(".score > h1");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const modalBtn = document.querySelector(".modal > .btn");

  playerSelection = evt.target.getAttribute("data-user-choice");
  computerSelection = getComputerSelection();

  if (checkTotalScores() === true) {
    modal.style.display = "block";
    overlay.style.display = "block";

    modalBtn.addEventListener("click", resetGame);
  }

  // *Play 1 round
  playRound(playerSelection, computerSelection);
  runningScore.textContent = playerScore;
}

/**Check the total scores after n rounds
 */
function checkTotalScores() {
  let modalMessage = document.querySelector(".modal-message");
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore < 5) {
      modalMessage.textContent = "You Lose!";
    }
    return true;
  }
}
/**Reset the game to original state
 */
function resetGame() {
  playerSelection = "";
  computerSelection = "";
  playerScore = 0;
  computerScore = 0;
  const hands = document.querySelector(".hands");
  const contest = document.querySelector(".contest");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  let runningScore = document.querySelector(".score > h1");

  runningScore.textContent = playerScore;

  // *Hide hands div and show contest div
  hands.style.display = "flex";
  contest.style.display = "none";

  modal.style.display = "none";
  overlay.style.display = "none";
}

handList.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const hands = document.querySelector(".hands");
    const contest = document.querySelector(".contest");

    // *Hide hands div and show contest div
    hands.style.display = "none";
    contest.style.display = "flex";

    startGame(evt);
  });
});

newGame.addEventListener("click", (evt) => {
  const hands = document.querySelector(".hands");
  const contest = document.querySelector(".contest");

  // *Hide hands div and show contest div
  hands.style.display = "flex";
  contest.style.display = "none";

  startGame(evt);
});
