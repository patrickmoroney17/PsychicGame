var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      alert("the computer choses " + computerGuess);

      var wins = 0;
      var losses = 0;
      var remainingGuesses = 9;
      var guessedLetters = [];

      var userChoiceText = document.getElementById("userchoice-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var remainingGuessesText = document.getElementById("remainingGuesses-text");
      // var guessedLettersText = document.getElementById("guessedLetters-Text")


      document.onkeyup = function(event) {
        var userChoice = event.key;

        if (userChoice === computerGuess) {

          alert("You won!");
          wins++;
          guessedLetters = [];
          remainingGuesses = 9;
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          alert("the computer choses " + computerGuess);

        } else {
          remainingGuesses--;
          guessedLetters.push(userChoice);

        }

        if (remainingGuesses <= 0) {
          // document.getElementById("losses").innerHTML = losses++;

          alert("You lost!");
          losses++;
          remainingGuesses = 9;
          guessedLetters = [];

          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          alert("the computer choses " + computerGuess);
        }


          userChoiceText.textContent = "You chose: " + userChoice;
          // computerChoiceText.textContent = "The computer chose: " + computerGuess;
          winsText.textContent = wins;
          lossesText.textContent = losses;
          remainingGuessesText.textContent = remainingGuesses;
          // guessedLettersText.textContent = guessedLetters;

        }