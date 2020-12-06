const applyDichotomy = (input, fullRange, lowerFlag) =>
    input.split('').reduce((bounds, flag) => {
        const delta = Math.ceil((bounds[1] - bounds[0]) / 2);
        if (flag === lowerFlag) {
            return [bounds[0], bounds[1] - delta];
        }

        return [bounds[0] + delta, bounds[1]];
    }, fullRange)[0];

exports.getSeatNumber = (boardingPass) => {
    const rowNumber = applyDichotomy(boardingPass.substr(0, 7), [0, 127], 'F');
    const seatNumber = applyDichotomy(boardingPass.substr(7), [0, 7], 'L');

    return rowNumber * 8 + seatNumber;
};

exports.firstPuzzle = (inputs) =>
    Math.max(...inputs.map(exports.getSeatNumber));

exports.secondPuzzle = (inputs) => {
    const seatNumbers = inputs.map(exports.getSeatNumber).sort((a, b) => a - b);

    const missingSeats = [];
    for (let i = 0; i < 127 * 8 + 7; i++) {
        if (seatNumbers.includes(i)) {
            continue;
        }

        missingSeats.push(i);
    }

    for (let i = 0; i < missingSeats.length; i++) {
        const seatNumber = missingSeats[i];
        if (
            !missingSeats.includes(seatNumber - 1) &&
            !missingSeats.includes(seatNumber + 1)
        ) {
            return seatNumber;
        }
    }
};
