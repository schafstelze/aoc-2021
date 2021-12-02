import {solutionDay02Part1, solutionDay02Part2} from "./solutionDay02";

const fs = require('fs');

const complexInput: string[] = fs.readFileSync('day02/input.txt', 'utf8')
    .split(/\r?\n/)

describe('solutionDay02.ts', () => {
    it('Part1 should be correct for simple input', async () => {
        const movements = [
            'forward 5',
            'down 5',
            'forward 8',
            'up 3',
            'down 8',
            'forward 2'
        ]

        expect(solutionDay02Part1(movements)).toBe(150)
    })

    it('Part1 should be correct for complex input', async () => {
        expect(solutionDay02Part1(complexInput)).toBe(1947824)
    })

    it('Part2 should be correct for simple input', async () => {
        const movements = [
            'forward 5',
            'down 5',
            'forward 8',
            'up 3',
            'down 8',
            'forward 2'
        ]

        expect(solutionDay02Part2(movements)).toBe(900)
    })

    it('Part2 should be correct for complex input', async () => {
        expect(solutionDay02Part2(complexInput)).toBe(1813062561)
    })
})
