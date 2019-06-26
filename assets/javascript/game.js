// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById('directions-text');
var userChoiceText = document.getElementById('userchoice-text');
var computerChoiceText = document.getElementById('computerchoice-text');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
// Determines which key was pressed.
var userGuess = event.key;

// if (userGuess !== 'r' || userGuess !== 's' || userGuess !== 'p') {
//   return false;
// }
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Reworked our code from last step to use "else if" instead of lots of if statements.

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
if (userGuess === computerGuess) {
    wins++;
    } else {
    losses++;
    }

    // Hide the directions
    directionsText.textContent = '';

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = 'You chose: ' + userGuess;
    computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
    winsText.textContent = 'wins: ' + wins;
    lossesText.textContent = 'losses: ' + losses;
};






// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// var wins = 0;
// var losses = 0;
// var guessCount = 0;
// var guessLeftCount = 9;
// var guessSoFar = [];

// var userChoiceText = document.getElementById('userchoice-text');
// var computerChoiceText = document.getElementById('computerchoice-text');
// var winsText = document.getElementById('wins-text');
// var lossesText = document.getElementById('losses-text');
// var guessesText = document.getElementById('guesses-text');
// var guessesLeftText = document.getElementById('guessesLeft-text');

// for (i = 0; i < 9; i++) {

//     var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//     document.onkeyup = function(event) {
//         // Determines which key was pressed.
//         var userGuess = event.key;
    
//         // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//         if (userGuess === computerChoice) {
//             wins++;
//         } else {
//             guessCount++;
//             guessLeftCount--;
//         }

//         // Display the user and computer guesses, and wins/losses/ties.
//         userChoiceText.textContent = 'You chose: ' + userGuess;
//         computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
//         winsText.textContent = 'Wins: ' + wins;
//         lossesText.textContent = 'Losses: ' + losses;
//         guessesText.textContent = 'Guess Count: ' + guessCount;
//         guessesLeftText.textContent = guessLeftCount + ' guesses left';
//     }
// };

