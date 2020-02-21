let userScore = 0;
let computerScore = 0;
const USER_SCORE = document.getElementById('user-score');
const COMPUTER_SCORE = document.getElementById('computer-score');
const RESULT_MESSAGE = document.getElementById('result-message');
const USER_ROCK = document.getElementById('user-rock');
const USER_PAPER = document.getElementById('user-paper');
const USER_SCISSORS = document.getElementById('user-scissors');
const RESET_BTN = document.getElementById('reset-btn');

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
  RESULT_MESSAGE.innerHTML = `<span class="result-short">You WIN!</span>Your ${userChoice} beats the computer ${computerChoice}.`;
  document.querySelector('.result-short').classList.add('green-win');
}

function lose(userChoice, computerChoice) {
  computerScore++;
  COMPUTER_SCORE.textContent = computerScore;
  RESULT_MESSAGE.innerHTML = `<span class="result-short">You LOST!</span>Your ${userChoice} loses to the computer ${computerChoice}.`;
  document.querySelector('.result-short').classList.add('red-lost');
}

function draw(userChoice, computerChoice) {
  RESULT_MESSAGE.innerHTML = `<span class="result-short">It's a DRAW!</span>Your ${userChoice} equals the computer ${computerChoice}.`;
  document.querySelector('.result-short').classList.add('gray-draw');
}

function resetScore() {
  userScore -= userScore;
  computerScore -= computerScore;
  COMPUTER_SCORE.textContent = userScore;
  USER_SCORE.textContent = computerScore;
}