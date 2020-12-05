const getNumberTreesForSlope = (slopeX, slopeY) => (inputs) => {
    const mapHeight = inputs.length;
    const requiredMapWidth = mapHeight * (slopeX / slopeY);

    const numberRepeats = Math.ceil(requiredMapWidth / inputs[0].length);

    const fullMap = inputs.map(row => row.repeat(numberRepeats));

    let numberTrees = 0;
    let x = 0, y = 0;

    let location;
    do {
        try {
            location = fullMap[y][x];
            if (location === '#') {
                numberTrees++;
            }
        } catch (err) {
            break;
        }

        x += slopeX;
        y += slopeY;
    } while (location);

    return numberTrees;
};

exports.firstPuzzle = getNumberTreesForSlope(3, 1);

exports.secondPuzzle = (inputs) => [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
].reduce((product, slope) => product * getNumberTreesForSlope(...slope)(inputs), 1);
