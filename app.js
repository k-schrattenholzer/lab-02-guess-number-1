// import functions and grab DOM elements
import { comparesNumbers } from './utils.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
let correctAnswer = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;
console.log(correctAnswer);

const numberInput = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const highLow = document.getElementById('high-low');
const guessesRemainingEl = document.getElementById('guesses-remaining');
const winLose = document.getElementById('win-lose');
const reloadButton = document.getElementById('reload-button');






guessButton.addEventListener('click', () => {
    guessesRemaining--;
    const numberValue = Number(numberInput.value);
    
    if (comparesNumbers(numberValue, correctAnswer) === 1) {
        highLow.textContent = 'Too high';
        guessesRemainingEl.textContent = `You have ${guessesRemaining} guesses remaining.`;
    }
    else if (comparesNumbers(numberValue, correctAnswer) === -1) {
        highLow.textContent = 'Too low';
        guessesRemainingEl.textContent = `You have ${guessesRemaining} guesses remaining.`;
    } else if (comparesNumbers(numberValue, correctAnswer) === 0) {
        highLow.textContent = "Hey that's right!";
        guessesRemainingEl.textContent = '';
        winLose.textContent = 'Congrats, you won!';
    }
    if (guessesRemaining === 0 && numberValue !== correctAnswer) {
        winLose.textContent = 'Aw man, you lost.';
    }
    if (guessesRemaining === 0 || numberValue === correctAnswer) {
        guessButton.disabled = true;
        numberInput.disabled = true;
    }

});

reloadButton.addEventListener('click', () => {
    location.reload();
});
