const { exit } = require("process");

function gameGuessANumber() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let pickedNumber = Math.floor(Math.random() * 100);
    let guess 
    let totalGuesses = 5
    let leftGuesses = 5
    let playedTries = 0
    let answer
    
    let repeatingQueryAboutNumber = function () {
        readline.question("Guess the number (0 - 100): ", number =>
        {
            guess = Number(number)
                if (guess <= 100 && guess >= 0) {
                    if (guess == pickedNumber) {
                        console.log("You guessed it!");
                        return readline.close();
                    } else if (guess < pickedNumber) {
                        playedTries ++
                        leftGuesses = totalGuesses - playedTries
                        console.log("Too Low!");
                        console.log(`${leftGuesses} attempts left`);
                        if (leftGuesses <= 0){
                            console.log("Game over!");
                            readline.question("Do you want to start a new game?")
                        } else {
                            repeatingQueryAboutNumber()
                        }
                    } else if (guess > pickedNumber) {
                        playedTries ++
                        leftGuesses = totalGuesses - playedTries
                        console.log("Too High!");
                        console.log(`${leftGuesses} attempts left`);
                        if (leftGuesses <= 0){
                            console.log("Game over!");
                            readline.question("Do you want to start a new game?")
                        } else {
                            repeatingQueryAboutNumber()
                            
                        }
                    } 
                    } else {
                        console.log("Invalid input! Try again ...");
                        repeatingQueryAboutNumber()
                
            }

        })
    }
    repeatingQueryAboutNumber();
}
gameGuessANumber()

