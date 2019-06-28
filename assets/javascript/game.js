var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessedLetters = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingGuessesText = document.getElementById("remainingGuesses-text");

document.onkeyup = function(event) {
  var userChoice = event.key;

  // code from internet
  var regexp = /[a-z]/gi;
  if (!regexp.test(userChoice)) {
    alert("please enter a letter");
  }

  if (remainingGuesses <= 0) {

    alert("You lost!");
    losses++;
    remainingGuesses = 9;
    guessedLetters = [];
    remainingGuessesText.textContent = "Guess left: 9" + remainingGuesses;

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

  }

  if (userChoice === computerGuess) {

    alert("You won!");
    wins++;
    guessedLetters = [];
    remainingGuesses = 9;

    remainingGuessesText.textContent = "Guess left: " + remainingGuesses;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

  } else {
    remainingGuesses--;
    guessedLetters.push(userChoice);
    document.getElementById("guessedLetters-text").innerHTML = guessedLetters;
  }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingGuessesText.textContent = "Guesses left: " + remainingGuesses;
  }