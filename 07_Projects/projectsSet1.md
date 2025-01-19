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