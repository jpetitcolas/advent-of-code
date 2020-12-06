const { getInputs } = require('../../getInputs');
const { firstPuzzle, secondPuzzle } = require('./puzzle');

const inputs = getInputs(`${__dirname}/inputs.txt`);

console.log(`First puzzle: ${firstPuzzle(inputs)}`);
console.log(`Second puzzle: ${secondPuzzle(inputs)}`);
