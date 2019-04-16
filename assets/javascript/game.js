//Letters array
const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Game variables
let playerGuesses = [];
let guessesLeft = 9;
let wins = 0;
let losses = 0;
let randomLetter = '';
let userInput = "";

//Add the beginning values to the browser
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#losses").innerHTML = losses;
document.querySelector("#guesses").innerHTML = guessesLeft;

//Program creates a random letter from the lettersArr array
const randComp = () => {
    let randLet = Math.floor(Math.random() * 25);
    randomLetter = lettersArr[randLet];
    //console.log('random letter', randomLetter);
 };
 
 //Resets the UI
 const resetGame = () => {
    randComp();
    guessesLeft = 9;
    playerGuesses = []; 
    document.querySelector("#guesses").innerHTML = guessesLeft;
    document.querySelector('#letters-guessed').innerHTML = playerGuesses;
 };

randComp();

//Key event to play the game and track the number of guesses
document.addEventListener('keydown', function (event) {
    guessesLeft = guessesLeft - 1;
    userInput = event.key;

//Game conditionals    
    if (userInput === randomLetter) {
        wins = wins + 1
        document.querySelector("#wins").innerHTML = wins;
        resetGame();
    } else if (guessesLeft === 0) {
        losses = losses + 1
        document.querySelector("#losses").innerHTML = losses;
        playerGuesses = [];
        document.querySelector('#letters-guessed').innerHTML = playerGuesses;
        guessesLeft = 9;
        document.querySelector("#guesses").innerHTML = guessesLeft;
        randComp();
    } else if (userInput !== randomLetter && guessesLeft > 0) {
        document.querySelector("#guesses").innerHTML = guessesLeft;
        playerGuesses.push(userInput);
        document.querySelector('#letters-guessed').innerHTML = playerGuesses;
    }
    //console.log('user input', userInput);
});