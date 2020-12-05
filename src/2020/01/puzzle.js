const fs = require('fs');
const { parsed } = require('yargs');

exports.getInputs = () => fs.readFileSync(__dirname + '/01.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

exports.firstPuzzle = (inputs) => {
    const parsedInputs = inputs.map(i => +i);

    for (let i = 0 ; i < parsedInputs.length ; i++) {
        for (let j = 0 ; j < parsedInputs.length ; j++) {
            if (i === j) {
                continue;
            }

            if (parsedInputs[i] + parsedInputs[j] === 2020) {
                return parsedInputs[i] * parsedInputs[j];
            }
        }
    }

    throw new Error('Unable to find correct numbers.');
}

exports.secondPuzzle = (inputs) => {
    const parsedInputs = inputs.map(i => +i);

    for (let i = 0 ; i < parsedInputs.length ; i++) {
        for (let j = 0 ; j < parsedInputs.length ; j++) {
            for (let k = 0 ; k < parsedInputs.length ; k++) {
                if (i === j || j === k || i === k) {
                    continue;
                }

                if (parsedInputs[i] + parsedInputs[j] + parsedInputs[k] === 2020) {
                    return parsedInputs[i] * parsedInputs[j] * parsedInputs[k];
                }
            }
        }
    }

    throw new Error('Unable to find correct numbers.');
}

