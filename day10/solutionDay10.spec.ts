import {solutionDay10Part01, solutionDay10Part02} from "./solutionDay10";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
        .filter((line: string) => line.trim().length > 0)
}

describe('solutionDay10.ts', () => {
    it('should be correct', async () => {
        expect(solutionDay10Part01(readFileIntoLines('day10/input1.txt'))).toBe(26397)
        expect(solutionDay10Part01(readFileIntoLines('day10/input2.txt'))).toBe(469755)

        expect(solutionDay10Part02(readFileIntoLines('day10/input1.txt'))).toBe(288957)
        expect(solutionDay10Part02(readFileIntoLines('day10/input2.txt'))).toBe(2762335572)
    })
})
