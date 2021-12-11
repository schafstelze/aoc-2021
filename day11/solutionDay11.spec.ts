import {solutionDay11, solutionDay11Part2} from "./solutionDay11";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
        .filter((line: string) => line.trim().length > 0)
}

describe('solutionTemplate.ts', () => {
    it('should be correct', async () => {
        let input1: number[][] = readFileIntoLines('day11/input1.txt')
            .map((line: string) => line.split('')
            .map(Number))

        let input2: number[][] = readFileIntoLines('day11/input2.txt')
            .map((line: string) => line.split('')
            .map(Number))

        expect(solutionDay11(input1)).toBe(1656)
        expect(solutionDay11(input2)).toBe(1755)

        input1 = readFileIntoLines('day11/input1.txt')
            .map((line: string) => line.split('')
            .map(Number))

        input2 = readFileIntoLines('day11/input2.txt')
            .map((line: string) => line.split('')
            .map(Number))

        expect(solutionDay11Part2(input1)).toBe(195)
        expect(solutionDay11Part2(input2)).toBe(212)
    })
})
