
// functions

function getComputerChoice() { // gets the computer to choose between rock, paper, and scissors
    let answer = Math.floor(Math.random() * 3);
    if (answer === 0) {
        return "rock";
    } else if (answer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function Round(playerchoice, computerchoice) { // returns whether you lost or won a round
    playerchoice = playerchoice.toLowerCase();
    if (playerchoice === computerchoice) {
        return "Draw";
    } else if (playerchoice === "scissors") {
        if (computerchoice === "rock") {
            return "Lose";
        } else {
            return "Win";
        }
    } else if (playerchoice === "rock") {
        if (computerchoice === "paper") {
            return "Lose";
        } else {
            return "Win";
        }
    } else {
        if (computerchoice === "scissors") {
            return "Lose";
        } else {
            return "Win";
        }
    }
}

function playerSelection(id) { // Returns the player choice based on what button they clicked
    if (id === "rock") {
        playerChoice = "rock";
    } else if (id === "paper") {
        playerChoice = "paper";
    } else {
        playerChoice = "scissors";
    };
    return playerChoice;
}

function scoreChange(result) { // Updates the score variables and updates the score on the screen
    if (result === "Lose") {
        computerScore++;
    } else if (result === "Win") {
        playerScore++
    } else {
        // nothing happens to the scores since getting to the else statement means result === "Draw", so neither side gets points
    }
    document.getElementById("playerScore").innerHTML = `The score for the player is ${playerScore}`
    document.getElementById("computerScore").innerHTML = `The score for the computer is ${computerScore}`
}


// for (let i = 0; i < 5; i++) {
//     let computerchoice = getComputerChoice();
//     playerchoice = prompt("What will you pick to go against the unbeatbale machine?", "rock").toLowerCase();
//     result = Round(playerchoice, computerchoice)
//     if (result == "Draw"){
//         result_output = `You draw! You both played ${playerchoice}.`
//         console.log(result_output);
//         console.log(score);
//     } else if (result == "Win") {
//         result_output = `You won against the unbeatable machine!? Your choice, ${playerchoice}, beat the computer's ${computerchoice}!`;
//         score++;
//         console.log(result_output);
//         console.log(score);
//     } else {
//         result_output = `You lost against the unbeatable machine. It is only to be expected... your choice, ${playerchoice}, loses against the computer's ${computerchoice}.`
//         console.log(result_output);
//         console.log(score);
//     }

// }

// Main 

let playerScore = 0, computerScore = 0;

document.querySelectorAll("button").forEach(click => { // for each button click, this listens for it and acts accordingly
    let id = click.getAttribute("id");
    click.addEventListener("click", function() {
        scoreChange(Round(playerSelection(id), getComputerChoice())); // gets the result of the button click, and then changes the score on the screen
    });
});