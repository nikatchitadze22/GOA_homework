const choices = document.querySelectorAll('.choice');
const newGameButton = document.getElementById('new-game');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
    });
});

newGameButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert('It\'s a draw!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert('You win!');
        userScore++;
    } else {
        alert('Computer wins!');
        computerScore++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById('user-label').textContent = `You: ${userScore}`;
    document.getElementById('computer-label').textContent = `Computer: ${computerScore}`;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScore();
}
