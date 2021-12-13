import {solutionDay12, solutionDay12Part2} from "./solutionDay12";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
        .filter((line: string) => line.trim().length > 0)
}

describe('solutionDay12.ts', () => {
    it('should be correct', async () => {
        expect(solutionDay12(readFileIntoLines('day12/input1.txt'))).toBe(10)
        expect(solutionDay12(readFileIntoLines('day12/input2.txt'))).toBe(19)
        expect(solutionDay12(readFileIntoLines('day12/input3.txt'))).toBe(226)
        expect(solutionDay12(readFileIntoLines('day12/input4.txt'))).toBe(4775)

        expect(solutionDay12Part2(readFileIntoLines('day12/input1.txt'))).toBe(36)
        expect(solutionDay12Part2(readFileIntoLines('day12/input4.txt'))).toBe(152480)
    })
})
