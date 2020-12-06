const fs = require('fs');

exports.getInputs = (file = 'inputs.txt') =>
    fs.readFileSync(file, { encoding: 'utf-8' }).split('\n');

exports.parseInputsFromString = (inputs) =>
    inputs
        .split('\n')
        .map((t) => t.trim())
        .slice(1, -1);
