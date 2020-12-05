const { firstPuzzle, secondPuzzle } = require("./puzzle");

it('should get correct output', () => {
    const inputs = ['1721', '979', '366', '299', '675', '1456'];
    expect(firstPuzzle(inputs)).toBe(514579);
});

it('should get correct output', () => {
    const inputs = ['1721', '979', '366', '299', '675', '1456'];
    expect(secondPuzzle(inputs)).toBe(241861950);
});
