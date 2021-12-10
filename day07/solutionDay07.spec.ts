import {solutionDay07Part1, solutionDay07Part2} from "./solutionDay07";
const fs = require('fs');

describe('solutionDay07.ts', () => {
    it('should be correct', async () => {
        expect(solutionDay07Part1([16,1,2,0,4,2,7,1,2,14])).toBe(37)

        const numbers: number[] = fs.readFileSync('day07/input1.txt', 'utf8').split(',').map(Number)
        expect(solutionDay07Part1((numbers))).toBe(325528)

        expect(solutionDay07Part2([16,1,2,0,4,2,7,1,2,14])).toBe(168)
        expect(solutionDay07Part2(numbers)).toBe(85015836)
    })
})
