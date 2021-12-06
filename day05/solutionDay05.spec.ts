import {Line, solutionDay05Part1} from "./solutionDay05Part1";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
}

const parseToLines = (path: string): Line[] => {
    const lines: Line[] = []

    readFileIntoLines(path).forEach((rawLine: string) => {
        const startAndEnd: string[] = rawLine.split(' -> ')
        const start: string[] = startAndEnd[0].split(',')
        const end: string[] = startAndEnd[1].split(',')

        lines.push({
            start: {
                x: Number(start[0]),
                y: Number(start[1]),
                timesTouched: 0
            },
            end : {
                x: Number(end[0]),
                y: Number(end[1]),
                timesTouched: 0
            }
        })
    })

    return lines
}

describe('solutionDay05.ts', () => {
    it('solutionDay05Part1 should be correct', async () => {
        expect(solutionDay05Part1(parseToLines('day05/input1.txt'), false)).toBe(5)
        // expect(solutionDay05Part1(parseToLines('day05/input2.txt'), false)).toBe(5306)
    })
    it('solutionDay05Part2 should be correct', async () => {
        expect(solutionDay05Part1(parseToLines('day05/input1.txt'), true)).toBe(12)
        // expect(solutionDay05Part1(parseToLines('day05/input2.txt'), true)).toBe(17787)
    })
})
