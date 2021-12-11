import {solutionDay16, solutionDay16Part2} from "./solutionDay16";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
        .filter((line: string) => line.trim().length > 0)
}

describe('solutionDay11.ts', () => {
    it('should be correct', async () => {
        let input1: number[][] = readFileIntoLines('day11/input1.txt')
            .map((line: string) => line.split('')
            .map(Number))

        let input2: number[][] = readFileIntoLines('day11/input2.txt')
            .map((line: string) => line.split('')
            .map(Number))

        expect(solutionDay16(input1)).toBe(0)
        expect(solutionDay16(input2)).toBe(0)
    })
})
