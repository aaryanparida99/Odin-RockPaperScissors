/Randomly chooses one out of the three options/
function computerPlays() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

/Takes User Input for each round/
function userPlays() {

    let playerSelection = prompt("Enter Rock , Paper or Scissors");
    return playerSelection.toLowerCase();

}

/One round of the game and returns 1 if the player wins/
function playRound() {
    let computer = computerPlays();
    let userInput = userPlays();
    if( userInput == "rock" && computer == "scissors"){
        console.log("You Win!! Rock beats Scissors");
        return 1;
    }
    else if( userInput == "rock" && computer == "paper") {
        console.log("You Loose!! Paper beats Rock");
    }
    else if( userInput == "rock" && computer == "rock") {
        console.log("Draw!!Go again");
        playRound();
    }
    else if( userInput == "paper" && computer == "rock"){
        console.log("You Win!! Paper beats Rock");
        return 1;
    }
    else if( userInput == "paper" && computer == "scissors"){
        console.log("You Loose!! Scissors beats Paper");
    }
    else if( userInput == "paper" && computer == "paper"){
        console.log("Draw!!Go again");
        playRound();
    }
    else if( userInput == "scissors" && computer == "paper"){
        console.log("You Win!! Scissors beats Paper");
        return 1;
    }
    else if( userInput == "scissors" && computer == "rock"){
        console.log("You Loose!! Rock beats Scissors");
    }
    else if( userInput == "scissors" && computer == "scissors"){
        console.log("Draw!!Go again");
        playRound();
    }
}
/Fucntion game plays 5 rounds or Rock , Paper & Scissors and declares winner and score of player and computer/

function game(){

    let u = 0,
        c = 0;
    for(let i=0; i<5; i++){
        temp = playRound();
        if(temp == 1){
            u++;
        }
        else{
            c++;
        }
     }
    if(u>c){
        console.log(`You beat the computer Score: Player: ${u} Computer: ${c}`);
    }
    if(c>u){
        console.log(`Computer beats you Score: Player: ${u} Computer: ${c}`);
    }
}

game();