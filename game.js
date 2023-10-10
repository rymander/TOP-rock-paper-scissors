let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const score = document.querySelector('#score')
const playGame = document.querySelector('#playGame')

playGame.addEventListener('click', function (e) {
    e.preventDefault()
})

rock.addEventListener('click', function (e) {
    e.preventDefault()
    alert('you clicked rock!')
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
function playRound() {
    let playerSelection = prompt('Enter "rock" "paper or "scissors')
    while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
        playerSelection = prompt('Please enter either "rock" "paper" or "scissors"')
    }
    let computerSelection = getComputerChoice()
    if (computerSelection == playerSelection.toLowerCase()) {
        console.log(`You chose ${playerSelection.toLowerCase()} and Computer chose the same thing, it's a draw`)
        return 'draw'
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        console.log('You win!')
        return playerScore++
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        console.log('You win!')
        return playerScore++
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        console.log('You win!')
        return playerScore++
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        console.log('Computer wins!')
        return computerScore++
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        console.log('Computer wins!')
        return computerScore++
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        console.log('Computer wins!')
        return computerScore++
    } else {
        console.log('Something went wrong!')
    }

}

// **  runs a game with user choice for how many rounds, returns winner out of the rounds played
function game() {
    let rounds = parseInt(prompt('Enter how many rounds to play___?'))

    for (let i = 0; i < rounds; i++) {
        playRound()
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log('You win the game!')
        playerScore = 0
        computerScore = 0
    } else if (computerScore > playerScore) {
        console.log('WOMPWOMP Computer Wins the game!!')
        playerScore = 0
        computerScore = 0
    } else {
        console.log(`It's a draw, nobody won :(`)
        playerScore = 0
        computerScore = 0
    }

}
