## Memory Game Project

# Memory Game Folder
Open Memory Game folder in your code editor.
It contains HTML File index.html,
CSS File css/app.css
JavaScript File js/app.js

## Develop a fully functional game

# Initialize an Array
Create an array which contains 8 different pairs of cards.

# Initialize an Empty array
this array stores clicked and opened cards

# Shuffle()
A shuffle function which accepts an array of cards as argument and generate another array with cards with random index.

# generateCard(card)
A function to display card dynamically.

# startGame()
A function which call shuffle fuction and place random cards on game board.

# flipCard()
A function which loop through an array and add event listener to recognize clicks.
It also calls required function to perform specific tasks.

# removeCard()
A function to set setTimeout() function to unflip the flipped card with in a second if they don't match

# matchedCard() 
A function to check if two flipped cards do match or not. it changes background of card and remain flipped if they match.

# restartGame()
A function to restart game when user clicks restrt icon on result popup.

# showTimer()
A function to display timer on the score panel on game board.

# setTimer()
A function to start timer on the first click on the any card of game board.

# clickCounter()
A function to recognize first click on the game board and trigger setTimer() function to start timer.

# resetTimer()
A function to reset the timer when user wants to restart the game.

# addMoves()
A function to count number of moves player takes to finish the game and display it on score panel as well as on result popup.

# resetMoves()
A function to reset moves to its default value when user reset or replay the game.

# resetScore()
A function to reset stars score to its default when user reset or replay the game.

# checkScore()
A function to manage the score based on number of moves taken to finish the game.

# gameWon()
A function to check all cards are opend and matched to its pair. it will also show a result popup.

# modalResults()
A function to obtain current status of score panel at the time of winning and display on result popup window.

# closeModel()
A function to close the popup result window upon clicking the cross icon.

# replayGame()
A function to reload the game board to start playing again.