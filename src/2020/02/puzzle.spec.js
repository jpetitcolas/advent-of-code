const { firstPuzzle, secondPuzzle } = require("./puzzle");

describe('First Part', () => {
    it('should get correct output', () => {
        const inputs = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        expect(firstPuzzle(inputs)).toBe(2);
    });
});

describe('Second Part', () => {
    it('should get correct output', () => {
        const inputs = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        expect(secondPuzzle(inputs)).toBe(1);
    });
});


