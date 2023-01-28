function gameGuessANumber() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let pickedNumber = Math.floor(Math.random() * 100);
    let guess 
    
    let repeatingQueryAboutNumber = function () {
        readline.question("Guess the number (0 - 100): ", number =>
        {
            guess = Number(number)
            if (guess <= 100 && guess >= 0) {
                if (guess == pickedNumber) {
                    console.log("You guessed it!");
                    return readline.close();
                } else if (guess < pickedNumber) {
                    console.log("Too Low!");
                    repeatingQueryAboutNumber()
                } else if (guess > pickedNumber) {
                    console.log("Too High!");
                    repeatingQueryAboutNumber()
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

