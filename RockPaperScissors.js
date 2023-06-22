const PLAYER = 1
const COMPUTER = 2

let playerWins = 0
let computerWins = 0
let reset = 0

// Setting up global variable for winner
const winner = document.querySelector(".winner")

// Setting up Score printing points, and defaulting to 0
const playerScore = document.querySelector(".pScore");
playerScore.textContent = `Player Score: ${playerWins}`;

// Setting up Score printing points, and defaulting to 0
const computerScore = document.querySelector(".cScore");
computerScore.textContent = `Computer Score: ${computerWins}`;

// Button Logic
const choices = document.querySelectorAll('.btn');

choices.forEach(choice => choice.addEventListener('click',()=>{
    let playerChoice = choice.id;
    let compChoice = getCompChoice()
    playRound(playerChoice, compChoice);
}))

// Random pick by computer
function getCompChoice() {
    let rand_pick = Math.floor(Math.random() * 3);
    if (rand_pick == 0){
         return "r"
    }
    else if (rand_pick == 1){
         return "p"
    }
    else {
         return "s"
    }
}

// Can be set up as an array of win conditions for optimization.
function winCondition(player,computer) {
    // All possible win conditions comp
    if (player == "r" && computer == "p" ){
        return COMPUTER
    }
    if (player == "p" && computer == "s" ){
        return COMPUTER
    }
    if (player == "s" && computer == "r" ){
        return COMPUTER
    }

    // All possible win conditions player
    if (player == "p" && computer == "r" ){
        return PLAYER
    }
    if (player == "s" && computer == "p" ){
        return PLAYER
    }
    if (player == "r" && computer == "s" ){
        return PLAYER
    }

}

function playRound(player, computer) {
    //Checking Draw Condition
    if(reset == 1) {
        reset = 0
        winner.textContent = `Who Shall Win?`
    }
    
    //Getting win val
    gamePoint = winCondition(player,computer)

    if(gamePoint == PLAYER){
        playerWins += 1
    }
    else if (gamePoint == COMPUTER) {
        computerWins += 1
    }

    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;

    if(playerWins == 5){
        winner.textContent = `Player Wins!`
        playerWins = 0
        computerWins = 0
        reset = 1
    }
    else if (computerWins == 5){
        winner.textContent = `Computer Wins!`
        playerWins = 0
        computerWins = 0
        reset = 1
    }
}