// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // Check if playerSelection is valid
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return 'Invalid input. Please choose rock, paper, or scissors.';
    }

    // Determine the winner
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to play the game for five rounds
function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You Win!")) {
            playerWins++;
        } else if (result.startsWith("You Lose!")) {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (playerWins < computerWins) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Call the playGame function to start the game
playGame();
