const PLAYER = 1
const COMPUTER = 2

let playerWins = 0
let computerWins = 0

function getCompChoice() {
   let randPick = Math.floor(Math.random() * 3);
   if (randPick == 0){
        return "R";
   }
   else if (randPick == 1){
        return "P";
   }
   else {
        return "S";
   }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock[R]-Paper[P]-Scissors[S]?");
    return playerChoice;
}

function winCondition(player,computer) {
    // All possible win conditions comp
    if (player == "r" && computer == "p" ){
        console.log("Player = Rock | Computer = Paper");
        return COMPUTER;
    }
    if (player == "p" && computer == "s" ){
        console.log("Player = Paper | Computer = Scissors");
        return COMPUTER;
    }
    if (player == "s" && computer == "r" ){
        console.log("Player = Scissors | Computer = Rock");
        return COMPUTER;
    }

    // All possible win conditions player
    if (player == "p" && computer == "r" ){
        console.log("Player = Paper | Computer = Rock");
        return PLAYER;
    }
    if (player == "s" && computer == "p" ){
        console.log("Player = Scissors | Computer = Paper");
        return PLAYER;
    }
    if (player == "r" && computer == "s" ){
        console.log("Player = Rock | Computer = Scissors");
        return PLAYER;
    }

}

function playRound() {
    // Best of 5
    for(let i = 0; i < 5; i++){
        //Getting all inputs
        let player = getPlayerChoice();
        let computer = getCompChoice();

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        //Checking Draw Condition
        if (player == computer){
            console.log("Draw Game");
            continue;
        }

        //Getting win val
        winner = winCondition(player,computer);

        if(winner == PLAYER){
            playerWins += 1;
        }
        else if (winner == COMPUTER) {
            computerWins += 1;
        }
    }

    if(playerWins > computerWins){
        console.log("Player Wins.");
    }
    else if(playerWins < computerWins){
        console.log("Computer Wins.");
    }
    else{
        console.log("Game is a Draw.");
    }

    // Resetting Global Variables
    playerWins = 0;
    computerWins = 0;
}

let isCont = 1;

while(isCont == 1) {
    playRound();
    isCont = prompt("Would you like to play another game?\n Press 1 to continue or any key to exit!");
}


