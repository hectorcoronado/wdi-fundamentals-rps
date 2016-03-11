////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner (getPlayerMove, getComputerMove) {

    if (getPlayerMove == getComputerMove) {
        winner = 'tie';
    }
    else if ((getPlayerMove == 'rock' && getComputerMove == 'scissors') ||
            (getPlayerMove == 'scissors' && getComputerMove == 'paper') ||
            (getPlayerMove == 'paper' && getComputerMove == 'rock')) {
        winner = 'player';
       
    } else {
        winner = 'computer';
        
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    getWinner(playerMove, computerMove);
        if (winner == 'player') {playerWins++;}
        else if (winner == 'computer') {computerWins++;}
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".\nThe score is currently " + playerWins + " to " + computerWins +".");
    }
    return [playerWins, computerWins];
}