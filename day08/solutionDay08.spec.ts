import {solutionDay08Part1, solutionDay08Part2} from "./solutionDay08Part1";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
}

describe('solutionDay08.ts', () => {
    it('solutionDay08Part1 should be correct', async () => {
        expect(solutionDay08Part1(readFileIntoLines('day08/input1.txt'))).toBe(26)
        expect(solutionDay08Part1(readFileIntoLines('day08/input2.txt'))).toBe(237)
        expect(solutionDay08Part2(readFileIntoLines('day08/input1.txt'))).toBe(61229)
        expect(solutionDay08Part2(readFileIntoLines('day08/input2.txt'))).toBe(1009098)
    })
})
