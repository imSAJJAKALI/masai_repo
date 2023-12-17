const crypto = require('crypto');

const input = process.argv.splice(2);

const operation = input[0];

const a = +input[1];
const b = +input[2];

switch (operation) {
  case 'add':
    console.log(a + b);
    break;
  case 'sub':
    console.log(a - b);
    break;
  case 'mult':
    console.log(a * b);
    break;
  case 'divide':
    console.log(a / b);
    break;
  case 'sin':
    console.log(Math.sin(a));
    break;
  case 'cos':
    console.log(Math.cos(a));
    break;
  case 'tan':
    console.log(Math.tan(a));
    break;
  case 'random':
    if (!isNaN(a)) {
      console.log(crypto.randomBytes(a).toString());
    } else {
      console.log('Provide length for random number generation.');
    }
    break;
  default:
    console.log('Invalid operation');
    break;
}
