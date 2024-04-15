let playerScore = 0;
let computerScore = 0;


const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const scoreToWin = document.querySelector('#scoreToWin')
const playGame = document.querySelector('#playGame')
const reset = document.querySelector('#resetBtn')
const currentScore = document.querySelector('#currentScore')
const scoreToWinDisplay = document.querySelector('#toWin')




playGame.addEventListener('click', function (e) {
    e.preventDefault()
    if(!scoreToWin.value || scoreToWin.value === 0){
        alert('Please choose a value greater than zero!')
    } else{
        game(playerScore, computerScore)
    }
    

})

reset.addEventListener('click', function(e) {
    e.preventDefault()
    rock.style.visibility = 'visible'
    paper.style.visibility = 'visible'
    scissors.style.visibility = 'visible'
    playGame.style.visibility = 'visible'
    scoreToWin.style.visibility = 'visible'
    alert('RESETING GAME!!')
    console.log('Clicked!')
    playerScore = 0
    computerScore = 0
    scoreToWin.value = ''
    scoreToWinDisplay.innerText = 'Choose winning score:'
    currentScore.innerText = `You: ${playerScore} Computer: ${computerScore}`
})

rock.addEventListener('click', function (e) {
    e.preventDefault()
    let playerSelection = 'rock'
    alert('you clicked rock!')
    playRound(playerSelection)
})
scissors.addEventListener('click', function (e) {
    e.preventDefault()
    let playerSelection = 'scissors'
    alert('you clicked scissors!')
    playRound(playerSelection)
})
paper.addEventListener('click', function (e) {
    e.preventDefault()
    let playerSelection = 'paper'
    alert('you clicked paper!')
    playRound(playerSelection)
})

// ** gets random number between 1 and 3, and returns computerChoice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        console.log('Computer chose "rock"')
        return 'rock'
    } else if (computerChoice == 2) {
        console.log('Computer chose "paper"')
        return 'paper'
    } else console.log('Computer chose "scissors"')
    return 'scissors'
}

// ** gets player choice and checks it against computerSelection to see who wins and gets a point, or a draw
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    if (computerSelection == playerSelection.toLowerCase()) {
        alert(`You chose ${playerSelection.toLowerCase()} and Computer chose the same thing, it's a draw`)
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore++
        alert(`You win this round! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore++
        alert(`You win this round! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerScore++
        alert(`You win this round! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        computerScore++
        alert(`Computer wins this round!! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        computerScore++
        alert(`Computer wins this round!! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        computerScore++
        alert(`Computer wins this round!! Computer chose: ${computerSelection}`)
        updateScore(playerScore, computerScore)
    } else {
        ('Something went wrong!')
    }

}


// **  runs a game with user choice for how many rounds, returns winner out of the rounds played
function game(playerScore, computerScore) {
    alert('click rock, paper, or scissors');
    scoreToWinDisplay.innerText = `Playing until: ${scoreToWin.value}`;
    playGame.style.visibility = 'hidden';
    scoreToWin.style.visibility = 'hidden';
}

function updateScore(playerScore, computerScore){
    let rounds = parseInt(scoreToWin.value)
    if (playerScore === rounds ||computerScore === rounds){
        currentScore.innerText = `${playerScore} - ${computerScore}`
        gameOver(playerScore, computerScore)
    } else {
        currentScore.innerText = `${playerScore} - ${computerScore}`
    }
}

 function gameOver(playerScore, computerScore){
    
    rock.style.visibility = 'hidden'
    paper.style.visibility = 'hidden'
    scissors.style.visibility = 'hidden'
    alert(`Game Over score was ${playerScore} to ${computerScore}`)

 }

 


 