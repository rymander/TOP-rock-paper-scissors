function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock'
    } else if (choice === 2) {
        return 'paper'
    } return 'scissors'
}


let computerScore = 0
let playerScore = 0


function playRound() {
    let playerSelection = prompt("Enter rock paper or scissors")

    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log("It's a tie")
        return 'tie'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("Paper beats rock, computer wins!")
        return computerWins()
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("Scissors beats paper, computer wins!")
        return computerWins()
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("Rock beats scissors, computer wins!")
        return computerWins()
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("Rock beats scissors!, You win!")
        return playerWins()
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("Paper beats rock!, You win!")
        return playerWins()
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("Scissors beats paper!, You win!")
        return playerWins()
    } else {
        console.log("Something went wrong!")
    }

}

function computerWins() {
    computerScore += 1
    console.log(`player score :${playerScore} vs computer score : ${computerScore}`)
}

function playerWins() {
    playerScore += 1
    console.log(`player score :${playerScore} vs computer score : ${computerScore}`)
}

function winner() {
    if (playerScore > computerScore) {
        console.log(`Congrats you win! Score : ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Ouch...computer wins!! Score: ${computerScore} to ${playerScore}`)
    } else {
        console.log("Something went wrong!")
    }
}


function game() {
    let userChoice = prompt("What score to play up to?...Enter a number")

    while (playerScore < userChoice && computerScore < userChoice) {
        playRound()
    }
    return winner()
}