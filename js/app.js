/*
 * Create a list that holds all of your cards
 */
var cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
            "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", 
            "fa-cube", "fa-cube", "fa-bicycle", "fa-bicycle",
            "fa-leaf", "fa-leaf", "fa-bomb", "fa-bomb"];


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//display card dynamically   

function generateCard(card) {
    return (`<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`);
}

// initialize game board
function startGame() {
    const deck = document.querySelector('.deck');
    var cardList = shuffle(cards).map(function(card) {
      return generateCard(card);
    });
    deck.innerHTML = cardList.join('');
  }
  startGame();


// setup event listener to flip the card

var displayedCard = [];
var allCards = document.querySelectorAll('.card');

function flipCard(){
    allCards.forEach(function(card){
        card.addEventListener('click', function(e){
            clickCounter();
            if (e.target.nodeName === "LI"){
                if (!e.target.classList.contains("open") && !e.target.classList.contains("show") && !e.target.classList.contains("match")){
                    if(displayedCard.length<=1){
                        displayedCard.push(e.target);
                        e.target.classList.add("open", "show");
                    } 
                    removeCard();
                    matchedCard();
                    gameWon();
                    modalResults();
                }
            }
        });
    });
}
flipCard();

// unflip cards if those don't match

function removeCard(){
    if (displayedCard.length==2){
            setTimeout(function(){
                displayedCard.forEach(function(card){
                    card.classList.remove("open", "show", "unmatch");
                });
                displayedCard=[];
            }, 1000);
            addMoves();
        checkScore();
    }
}

// check if two flipped cards match
var matchedPair = 0;
function matchedCard(){
    if (displayedCard[0].dataset.card === displayedCard[1].dataset.card){
        displayedCard.forEach(function(card){
            card.classList.add("match");
        })
    matchedPair = matchedPair + 1;
    }
    else{
        displayedCard.forEach(function(card){
            card.classList.add("unmatch")
        })
    }
}


// restart the game
const restart = document.querySelector('.restart');
restart.addEventListener('click', function(){
    restartGame();
});

function restartGame(){
    location.reload();
}

function showTimer() {
    const timer = document.querySelector('.timer');
    timer.innerHTML = hour + ' Hour ' + minute + ' Min ' + second + ' Sec ';
 }

// timer set up
var interval;
var second = 0;
var minute = 0;
var hour = 0;
var timerOn = true;

function setTimer() {
    interval = setInterval(() => {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
    }
    if (minute==60){
        hour++;
        minute = 0;
    }
    showTimer();
    },1000);
 }

 // setup timer on first click
var click = 0;
 function clickCounter(){
    if(click == 0){
        second = 0;
        minute = 0; 
        hour = 0;
        setTimer();  
    }
    click++;
 }
 
 // Reset thr timer
function resetTimer() {
    let second = 0;
    let minute = 0;
    let hour = 0;
    const timer = document.querySelector('.timer');
    timer.innerHTML = `0${hour}` + ' Hour ' + `0${minute}` + ' Min ' + `0${second}` + ' Sec ';
    clearInterval(interval);
 }

// moves counter
var moves = 0;
function addMoves() {
    const movesCounter = document.querySelector('.moves');
    movesCounter.innerHTML = moves + 1;
    moves++;
 }
 
 // reset moves
 function resetMoves(){
    let moves = 0;
    document.querySelector('.moves').innerHTML = moves;
 }

 const starsCounter = document.querySelector('.stars');
 const starImage = `<ul><i class="fa fa-star"></i></ul>`;

 function resetScore() {
    starsCounter.innerHTML = starImage + starImage + starImage;
 }
resetScore();

/*
 * Check score
 */
function checkScore() {
   if (moves <= 16 ) {
      starsCounter.innerHTML = starImage + starImage + starImage;
   } else if (moves <= 24) {
      starsCounter.innerHTML = starImage + starImage;
   } else {
      starsCounter.innerHTML = starImage;
   }
}

// Pop-up a result card upon winning
const modal = document.querySelector('.modal');
modal.classList.add('hidden');
function gameWon(){
    if (matchedPair==8){
       modal.classList.remove("hidden");
       clearInterval(interval);
    }
}

// Result card container 
function modalResults() {
    const totalMoves = document.querySelector('.total-moves');
 
    const totalTime = document.querySelector('.total-time');
    const timer = document.querySelector('.timer').innerHTML;
 
    const totalScore = document.querySelector('.total-score');
    const score = document.querySelector('.stars').innerHTML;
 
    totalMoves.innerHTML = `Total moves: ${moves}`;
    totalTime.innerHTML = `Total time: ${timer}`;
    totalScore.innerHTML = `Total score: ${score}`;
 }

// close result card when clicking close icon.
 const close = document.querySelector(".modal-close");
 close.addEventListener('click', closeModel);

 function closeModel(){
    modal.classList.add("hidden");
    location.reload();
 }

 // Ask player if they want to play again

 const replayButton = document.querySelector('.replay-button');
 replayButton.addEventListener('click', replayGame);

 function replayGame(){
     location.reload();
 }