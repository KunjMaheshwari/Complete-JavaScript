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
