
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



let score = 0;

for (let i = 0; i < 5; i++) {
    let computerchoice = getComputerChoice();
    playerchoice = prompt("What will you pick to go against the unbeatbale machine?", "rock").toLowerCase();
    result = Round(playerchoice, computerchoice)
    if (result == "Draw"){
        result_output = `You draw! You both played ${playerchoice}.`
        console.log(result_output);
        console.log(score);
    } else if (result == "Win") {
        result_output = `You won against the unbeatable machine!? Your choice, ${playerchoice}, beat the computer's ${computerchoice}!`;
        score++;
        console.log(result_output);
        console.log(score);
    } else {
        result_output = `You lost against the unbeatable machine. It is only to be expected... your choice, ${playerchoice}, loses against the computer's ${computerchoice}.`
        console.log(result_output);
        console.log(score);
    }

}