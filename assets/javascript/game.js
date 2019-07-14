var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoice);

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessedLetters = [];
// var computerChoice = computerChoice;
// var letters = "qwertyuiopasdfghjklzxcvbnm"

function jsGuess() {
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerChoice);
}


document.onkeyup = function (event) {
      var userGuess = event.key;
      console.log(userGuess);

      // HANDELING CORRECT GUESSES
      //test if players guess equals computerChoice, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
      if (userGuess === computerChoice) {
            wins++;
            guessesRemaining = 10;
            guessedLetters = [];

      }

      //HANDELING INCORRECT GUESSES
      //tests if players guess Does Not Equal computerChoice and decriments guessesRemaining by 1
      jsGuess();
      if (userGuess !== computerChoice) {
            guessesRemaining--;

      }

      //when remaining guessesRemaining equals zero, losses is incrimented by 1; guessesRemaining is reset to 10, and used letters array is cleared
      if (guessesRemaining == 0) {
            losses++;
            guessedLetters = []
            guessesRemaining = 10;
      }

      //HANDELING INCORRECT GUESSES - OUTPUT
      //this 'if' prevents a letter selected a 2nd time from being written to the guessedLetters again, although it still counts as a guess
      if (guessedLetters.indexOf(userGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the guessedLetters and writes it to the HTML
            guessedLetters.push(userGuess);
            $(".userGuesses-text").text(guessedLetters);
            console.log(guessedLetters);

      }
      //OUTPUT TO HTML
      //these statements write the values/scores generated to the HTML
      $(".wins-text").text(wins);
      $(".losses-text").text(losses);
      $(".guessesRemaining-text").text(guessesRemaining);

}
