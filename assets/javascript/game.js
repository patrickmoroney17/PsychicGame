// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessCount = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById('userchoice-text');
var computerChoiceText = document.getElementById('computerchoice-text');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var guessesText = document.getElementById('guesses-text');

for (i = 0; i < 9; i++) {

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
            wins++;
        } else {
            guessCount++;
        }

        userChoiceText.textContent = 'You chose: ' + userGuess;
        computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
        winsText.textContent = 'wins: ' + wins;
        lossesText.textContent = 'losses: ' + losses;
        guessesText.textContent = 'Guess Count: ' + guessCount;
    }
};


// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// var wins = 0;
// var losses = 0;
// var guessCount = 0;
// var guessLeftCount = 9;

// var userChoiceText = document.getElementById('userchoice-text');
// var computerChoiceText = document.getElementById('computerchoice-text');
// var winsText = document.getElementById('wins-text');
// var lossesText = document.getElementById('losses-text');
// var guessesText = document.getElementById('guesses-text');
// var guessesLeftText = document.getElementById('guessesLeft-text');

// for (i = 0; i < 9; i++) {

//     var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//     document.onkeyup = function(event) {
//         var userGuess = event.key;
    
//         if (userGuess === computerChoice) {
//             wins++;
//         } else {
//             guessCount++;
//             guessLeftCount--;
//         }

//         userChoiceText.textContent = 'You chose: ' + userGuess;
//         computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
//         winsText.textContent = 'Wins: ' + wins;
//         lossesText.textContent = 'Losses: ' + losses;
//         guessesText.textContent = 'Guess Count: ' + guessCount;
//         guessesLeftText.textContent = guessLeftCount + ' guesses left';
//     }
// };

