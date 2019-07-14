var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("the computer choses " + computerChoice);

var wins = 0;
var losses = 0;
var guessesRemaining = 8;

var guessedLetters = [];

var winsText = $("wins-text");
var lossesText = $("losses-text");

var guessesRemainingText = $("guessesRemaining-text");
var userGuessesText = $("userGuesses-text");

document.onkeyup = function(event) {

  var userGuess = event.key;

  if (guessesRemaining <= 0) {

    alert("You lost!");

    losses++;
    guessesRemaining = 8;
    guessedLetters = [];

    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("the computer choses " + computerChoice);

  }

  if (userGuess === computerChoice) {

    alert("You won!");

    wins++;
    guessesRemaining = 8;
    guessedLetters = [];

    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("the computer choses " + computerChoice);

  } else {

    guessesRemaining--;
    console.log("guesses remaining: " + guessesRemaining);

    guessedLetters.push(userGuess);

  }

    $(".wins-text").text(wins);
    $(".losses-text").text(losses);
    
    $(".guessesRemaining-text").text(guessesRemaining);
    $(".userGuesses-text").text(guessedLetters);
    console.log(guessedLetters);

}