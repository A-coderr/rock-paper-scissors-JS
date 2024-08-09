//Score Object
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

//Function that calculates computer move
function computerMoveLogic(){

    //Chooses random number between 1 and 0
    const randomNumber = Math.random();
    let computerMove = '';

    //Computer Move Logic
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
        console.log(computerMove);
    }
    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper';
        console.log(computerMove);
    }
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'scissors';
        console.log(computerMove);
    }

    return computerMove;                     
}


function gameLogic(playerMove){

    let computerMove = computerMoveLogic();
    const rockIcon = '&#9994;';
    const paperIcon = '&#9995;';
    const scissorsIcon = '&#9996;';

    let result = '';

    //Result Logic
    if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You lose.';
            computerMove = rockIcon;
        } 
        else if(computerMove === 'paper') {
            result = 'You win.';
            computerMove = paperIcon;
        } 
        else if(computerMove === 'scissors') {
            result = 'Tie.';
            computerMove = scissorsIcon;
        }
        playerMove = scissorsIcon;
    } 
    else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You win.';
            computerMove = rockIcon;
        }
        else if(computerMove === 'paper') {
            result = 'Tie.';
            computerMove = paperIcon;
        } 
        else if(computerMove === 'scissors') {
            result = 'You lose.';
            computerMove = scissorsIcon;
        }  
        playerMove = paperIcon;                      
    } 
    else if (playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie.';
            computerMove = rockIcon;
        } 
        else if(computerMove === 'paper') {
            result = 'You lose.';
            computerMove = paperIcon;
        } 
        else if(computerMove === 'scissors') {
            result = 'You win.';
            computerMove = scissorsIcon;
        }
        playerMove = rockIcon;
    }

    if(result === 'You win.'){
        score.wins += 1;
    }
    else if(result === 'You lose.'){
        score.losses += 1;
    }
    else if(result === 'Tie.'){
        score.ties += 1;
    }

    //Converts score into the JSON string and saves it into the local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.game-result').innerHTML = result;
    document.querySelector('.game-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
}

function updateScore(){
    document.querySelector('.game-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
