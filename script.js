
const arr = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';

const obj = document.querySelectorAll('.objImage');
let pScore = document.getElementById('player-score');
let cScore = document.getElementById('computer-score');
let result = document.getElementById('result-message');

obj.forEach((object) => {
  object.addEventListener('click', function(e) {
    let randomIndex = Math.floor(Math.random() * 3);
    let clickedObject = e.target.className;
    clickedObject = clickedObject.split(' ');

    playerChoice = clickedObject[1];
    computerChoice = arr[randomIndex];

    let remark = getResult(playerChoice, computerChoice);
    result.innerHTML = remark;

    remark = remark.split(',');

    if(remark[2] === ' & You won!') {
      playerScore = playerScore+1;
      console.log(playerScore);
      pScore.innerHTML = playerScore;
    }
    else if(remark[2] === ' & Computer won!') {
      computerScore = computerScore+1;
      console.log(computerScore);
      cScore.innerHTML = computerScore;
    }
  });
})

function getResult (playerChoice, computerChoice) {
  if (playerChoice === 'rock') {
    if(computerChoice === 'rock') {
      return "You chose Rock, Computer chose Rock, & It's tie!";
    }
    else if(computerChoice === 'paper') {
      return "You chose Rock, Computer chose Paper, & Computer won!";
    }
    else return "You chose Rock, Computer chose Scissors, & You won!";
  }
  else if (playerChoice === 'paper') {
    if(computerChoice === 'paper') {
      return "You chose Paper, Computer chose Paper, & It's tie!";
    }
    else if(computerChoice === 'scissors') {
      return "You chose Paper, Computer chose Scissors, & Computer won!";
    }
    else return "You chose Paper, Computer chose Rock, & You won!";
  }
  else {
    if(computerChoice === 'rock') {
      return "You chose Scissors, Computer chose Rock, & Computer won!";
    }
    else if (computerChoice === 'paper') {
      return "You chose Scissors, Computer chose Paper, & You won!";
    }
    else return "You chose Scissors, Computer chose Scissors, & It's tie!"
  }
}