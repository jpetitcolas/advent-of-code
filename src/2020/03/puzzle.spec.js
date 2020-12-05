const { firstPuzzle, secondPuzzle } = require("./puzzle");

describe('2020-12-03', () => {
    const inputs = `
        ..##.......
        #...#...#..
        .#....#..#.
        ..#.#...#.#
        .#...##..#.
        ..#.##.....
        .#.#.#....#
        .#........#
        #.##...#...
        #...##....#
        .#..#...#.#
    `.split('\n').map(t => t.trim()).filter(x => x);

    describe('First Part', () => {
        it('should get correct output', () => {
            expect(firstPuzzle(inputs)).toBe(7);
        });
    });

    describe('Second Part', () => {
        it('should get correct output', () => {
            expect(secondPuzzle(inputs)).toBe(336);
        });
    });
});
