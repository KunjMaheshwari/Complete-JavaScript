# Projects related to DOM

### project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-m1ejejaj)

# Solution Code

### project 1

```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    } else {
      body.style.backgroundColor = 'white';
    }
  });
});
```

### project 2

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0) {
    results.innerHTML = 'Please give a valid height';
  }
  if (weight === '' || weight < 0) {
    results.innerHTML = 'Please give a valid weight';
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;
});
```
### project 3

```javascript
const currentTime = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  currentTime.innerHTML = date.toLocaleTimeString();
}, 1000);

```

### project 4

``` javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over! The Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else {
    displayMessage(`Number is too High`);
  }
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
  userInput.value = ''; // Reset input value after each guess
}

function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1); // Generate new random number for next game
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = ''; // Clear previous guesses
  remaining.innerHTML = '10';
  lowOrHigh.innerHTML = '';
  playGame = true;
  userInput.removeAttribute('disabled'); // Enable input field for new game
  p.innerHTML = ''; // Remove the "New Game" button
}

function endGame() {
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h1 id="newGame">Start a New Game</h1>`;
  startOver.appendChild(p);
  p.addEventListener('click', function () {
    newGame();
  });
  playGame = false;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```