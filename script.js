const items = ['Rock','Paper','Scissors'];

/* begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ */
function computerPlay() {
  return items[Math.floor(Math.random()*items.length)]
};

/* To ask for userSelection */
function userInput() {
    playerSelection = prompt('Rock, Paper, or Scissors?', '');
      if ((playerSelection.toLowerCase() === 'rock')
          ||(playerSelection.toLowerCase() === 'paper')
          ||(playerSelection.toLowerCase() === 'scissors')) {
        console.log(playRound(playerSelection,computerSelection));
      } else {
      alert('That\'s not a valid choice.');
      userInput();
    }
  };

let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

/* Write a function that plays rounds of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - and then
 return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
To make my function’s playerSelection parameter case-insensitive >> .toLowerCase()
 (so users can input rock, ROCK, RocK or any other variation).*/
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {
        alert('Tie!');
        return 'Tie!\nComputer Score: ' + 
                computerScore + '\nYour Score: ' + playerScore;
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') 
              || (computerSelection === 'scissors' && playerSelection === 'paper') 
              || (computerSelection === 'paper' && playerSelection === 'rock')) {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 'Computer Score: ' + ++computerScore + 
                '\nYour Score: ' + playerScore;
    } else {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 'Your Score: ' + ++playerScore  +
                '\nComputer Score: ' + computerScore;
    };
};

function game () {
    computerScore = 0;
    playerScore = 0;
    for (let i=0; i<5; i++) {
      userInput();
    };
    console.log(winner());
    
    function winner() {
      if (playerScore===computerScore) {
        alert(playerScore + '-' + computerScore + '\nTie!');
        return playerScore + '-' + computerScore + '\nTie!';
      } else if (playerScore>computerScore) {
        alert(playerScore + '-' + computerScore + '\nYou win!!');
        return playerScore + '-' + computerScore + '\nYou win!!';
      } else {
        alert(playerScore + '-' + computerScore + '\nYou lost. Better luck next time!');
        return playerScore + '-' + computerScore + '\nYou lost. Better luck next time!';
      }
    };
};

game();
