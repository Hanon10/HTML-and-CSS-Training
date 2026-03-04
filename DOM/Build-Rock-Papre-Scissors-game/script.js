const options = ['Rock', 'Paper', 'Scissors'];

function getRandomComputerResult() {
    return options[Math.floor(Math.random()*options.length)]
}
function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if(hasPlayerWonTheRound(userOption,computerResult)){
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`
  }
  else if(userOption === computerResult){
    return `It's a tie! Both chose ${userOption}`
  }
  else{
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}

const playerScoreSpanElement = document.getElementById('player-score')
const computerScoreSpanElement = document.getElementById('computer-score')
let roundResultsMsg = document.getElementById('results-msg')

function showResults(userOption){
    roundResultsMsg.textContent = getRoundResults(userOption);
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
    if(playerScore === 3 || computerScore === 3){
        winnerMsgElement.innerText = `${playerScore === 3 ? 'Player' : 'Computer'} has won the game.`;
        optionsContainer.style.display = 'none';
        resetGameBtn.style.display = 'block';
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = 'none';
    optionsContainer.style.display = 'block';
    winnerMsgElement.innerText = '';
    roundResultsMsg.innerText = '';
}



const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const winnerMsgElement = document.getElementById('winner-msg')
const optionsContainer = document.querySelector('.options-container')
const resetGameBtn = document.getElementById('reset-game-btn')

resetGameBtn.addEventListener('click',resetGame)

rockBtn.addEventListener('click', function(){
    showResults('Rock')
})

paperBtn.addEventListener('click', function(){
    showResults('Paper')
})

scissorsBtn.addEventListener('click', function(){
    showResults('Scissors')
})

