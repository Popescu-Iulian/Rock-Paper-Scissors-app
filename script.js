let userScore = 0;
let computerScore = 0;
const USER_SCORE = document.getElementById('user-score');
const COMPUTER_SCORE = document.getElementById('computer-score');
const MESSAGE = document.getElementById('message');

function startGame(userChoice) {
  const COMPUTER_CHOICE = getComputerChoice();
  switch (userChoice + COMPUTER_CHOICE) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, COMPUTER_CHOICE);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, COMPUTER_CHOICE);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, COMPUTER_CHOICE);
      break;
  }
}

function getComputerChoice() {
  const COMPUTER_CHOICES = ['rock', 'paper', 'scissors'];
  const RANDOM_NUMBER = Math.floor(Math.random() * 3);
  return COMPUTER_CHOICES[RANDOM_NUMBER];
}

function win(userChoice, computerChoice) {
  userScore++;
  USER_SCORE.textContent = userScore;
  MESSAGE.innerHTML = `<span class="result">You WIN!</span>Your ${userChoice} beats the computer ${computerChoice}.`;
  document.querySelector('.result').classList.add('win-green');
}

function lose(userChoice, computerChoice) {
  computerScore++;
  COMPUTER_SCORE.textContent = computerScore;
  MESSAGE.innerHTML = `<span class="result">You LOST!</span>Your ${userChoice} loses to the computer ${computerChoice}.`;
  document.querySelector('.result').classList.add('lost-red');
}

function draw(userChoice, computerChoice) {
  MESSAGE.innerHTML = `<span class="result">It's a DRAW!</span>Your ${userChoice} equals the computer ${computerChoice}.`;
  document.querySelector('.result').classList.add('draw-gray');
}

function resetScore() {
  userScore -= userScore;
  computerScore -= computerScore;
  USER_SCORE.textContent = userScore;
  COMPUTER_SCORE.textContent = computerScore;
  MESSAGE.innerHTML = `<span class="result">Are you ready?</span> Make your move and beat the computer!`;
}