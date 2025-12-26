const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
        return;
    }

    const userWins =
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper");

    if (userWins) {
        userScore++;
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        userScoreSpan.textContent = userScore;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScoreSpan.textContent = computerScore;
    }
}

// Event listeners
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
