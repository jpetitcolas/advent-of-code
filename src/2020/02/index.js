const { getInputs } = require('../../getInputs');
const { firstPuzzle, secondPuzzle } = require('./puzzle');

const inputs = getInputs(`${__dirname}/inputs.txt`);
console.log(firstPuzzle(inputs));
console.log(secondPuzzle(inputs));
