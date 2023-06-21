const PLAYER = 1
const COMPUTER = 2

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

    let isOver = 1

    while(isOver){
        //Getting all inputs
        let player = getPlayerChoice()
        let computer = getCompChoice()

        player = player.toLowerCase()
        computer = computer.toLowerCase()

        //Checking Draw Condition
        if (player == computer){
            console.log("Draw")
            continue
        }

        //Getting win val
        winner = winCondition(player,computer)

        if(winner == PLAYER){
            console.log("Player Wins")
        }
        else if (winner == COMPUTER) {
            console.log("Computer Wins")
        }
        isOver = 0
    }

}

let isCont = 1

while(isCont = 1) {
    playRound()
    isCont = prompt("Would you like to continue?/n Press 1 to continue or any key to exit!")
}


