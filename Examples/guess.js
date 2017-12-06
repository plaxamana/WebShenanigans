var secretNum = Math.floor(Math.random() * (10 - 1) + 1);
var guess;

do {
    guess = prompt("Guess a number between 1 and 10");
    if (Number(guess) === secretNum) {
        alert("You got it!");
    } else if (guess > secretNum){
        alert("Too high, please try again.");
    } else {
        alert("Too low, please try again.");
    }
} while (Number(guess) !== secretNum);

