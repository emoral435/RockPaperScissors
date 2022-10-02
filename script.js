
function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3);
    if (answer === 0) {
        return "rock";
    } else if (answer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function Round(playerchoice, computerchoice) {
    playerchoice = playerchoice.toLowerCase();
    if (playerchoice === computerchoice) {
        return `You both put ${playerchoice}! Draw.`;
    } else if (playerchoice === "scissors") {
        if (computerchoice === "rock") {
            computerchoice = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
            return `You lose! ${computerchoice} beats ${playerchoice}!`;
        } else {
            playerchoice = playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1);
            return `You win! ${playerchoice} beats ${computerchoice}!`;
        }
    } else if (playerchoice == "rock") {
        if (computerchoice === "paper") {
            computerchoice = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
            return `You lose! ${computerchoice} beats ${playerchoice}!`;
        } else {
            playerchoice = playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1);
            return `You win! ${playerchoice} beats ${computerchoice}!`;
        }
    } else {
        if (computerchoice === "scissors") {
            computerchoice = computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1);
            return `You lose! ${computerchoice} beats ${playerchoice}!`;
        } else {
            playerchoice = playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1);
            return `You win! ${playerchoice} beats ${computerchoice}!`;
        }
    }
}

let playerchoice = "Rock";
let computerchoice = getComputerChoice()
console.log(Round(playerchoice, computerchoice))