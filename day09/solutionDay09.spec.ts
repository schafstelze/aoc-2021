import {solutionDay09Part1} from "./solutionDay09";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
}

describe('solutionDay09.ts', () => {
    it('should be correct', async () => {
        const input1: number [][] = []

        readFileIntoLines('day09/input1.txt').forEach((line: string) => {
            if (line.trim().length > 0) {
                input1.push(line.split('').map(Number))
            }
        })

        const input2: number [][] = []

        readFileIntoLines('day09/input2.txt').forEach((line: string) => {
            if (line.trim().length > 0) {
                input2.push(line.split('').map(Number))
            }
        })

        expect(solutionDay09Part1(input1)).toBe(15)
        expect(solutionDay09Part1(input2)).toBe(633)
    })
})
