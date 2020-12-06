/* eslint-disable no-template-curly-in-string */
const { getSeatNumber } = require('./puzzle');

describe('2020-12-05', () => {
    describe('getSeatNumber', () => {
        it.each`
            boardingPass    | seatNumber
            ${'FBFBBFFRLR'} | ${357}
            ${'BFFFBBFRRR'} | ${567}
            ${'FFFBBBFRRR'} | ${119}
            ${'BBFFBBFRLL'} | ${820}
        `(
            'should return set #$seatNumber for pass #${boardingPass}',
            ({ boardingPass, seatNumber }) => {
                expect(getSeatNumber(boardingPass)).toBe(seatNumber);
            }
        );
    });
});
