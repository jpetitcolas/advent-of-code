exports.firstPuzzle = (inputs) => inputs.reduce((numberValidPasswords, input) => {
    const [, minimum, maximum, character, password] = input.match(/(\d+)-(\d+) (\w+): (\w+)/);
    const numberOccurences = password.split('').filter(c => c === character).length;
    if (numberOccurences <= maximum && numberOccurences >= minimum) {
        return numberValidPasswords + 1;
    }

    return numberValidPasswords;
}, 0);

exports.secondPuzzle = (inputs) => inputs.reduce((numberValidPasswords, input) => {
    const matches = input.match(/(\d+)-(\d+) (\w+): (\w+)/);

    const firstPosition = +matches[1];
    const secondPosition = +matches[2];
    const expectedCharacter = matches[3];
    const password = matches[4];

    const characters = password.split('');
    if (
        characters[firstPosition - 1] === expectedCharacter && characters[secondPosition - 1] !== expectedCharacter
        ||
        characters[firstPosition - 1] !== expectedCharacter && characters[secondPosition - 1] === expectedCharacter
    ) {
        return numberValidPasswords + 1;
    }

    return numberValidPasswords;
}, 0);
