const PLAYER = 1
const COMPUTER = 2

let player_wins = 0
let computer_wins = 0

function getCompChoice() {
   let rand_pick = Math.floor(Math.random() * 3);
   if (rand_pick == 0){
        return "R"
   }
   else if (rand_pick == 1){
        return "P"
   }
   else {
        return "S"
   }
}

function getPlayerChoice() {
    let player_choice_var = prompt("Rock[R]-Paper[P]-Scissors[S]?")
    return player_choice_var
}

function winCondition(player,computer) {
    // All possible win conditions comp
    if (player == "r" && computer == "p" ){
        console.log("Player = Rock | Computer = Paper")
        return COMPUTER
    }
    if (player == "p" && computer == "s" ){
        console.log("Player = Paper | Computer = Scissors")
        return COMPUTER
    }
    if (player == "s" && computer == "r" ){
        console.log("Player = Scissors | Computer = Rock")
        return COMPUTER
    }

    // All possible win conditions player
    if (player == "p" && computer == "r" ){
        console.log("Player = Paper | Computer = Rock")
        return PLAYER
    }
    if (player == "s" && computer == "p" ){
        console.log("Player = Scissors | Computer = Paper")
        return PLAYER
    }
    if (player == "r" && computer == "s" ){
        console.log("Player = Rock | Computer = Scissors")
        return PLAYER
    }

}

function playRound() {
    // Best of 5
    for(let i = 0; i < 5; i++){
        //Getting all inputs
        let player = getPlayerChoice()
        let computer = getCompChoice()

        player = player.toLowerCase()
        computer = computer.toLowerCase()

        //Checking Draw Condition
        if (player == computer){
            console.log("Draw Game")
            continue
        }

        //Getting win val
        winner = winCondition(player,computer)

        if(winner == PLAYER){
            player_wins += 1
        }
        else if (winner == COMPUTER) {
            computer_wins += 1
        }
    }

    if(player_wins > computer_wins){
        console.log("Player Wins.")
    }
    else if(player_wins < computer_wins){
        console.log("Computer Wins.")
    }
    else{
        console.log("Game is a Draw.")
    }

    // Resetting Global Variables
    player_wins = 0
    computer_wins = 0
}

/*
let isCont = 1

while(isCont == 1) {
    playRound()
    isCont = prompt("Would you like to play another game?\n Press 1 to continue or any key to exit!")
}
*/


