import {solutionDay03Part1, solutionDay03Part2} from "./solutionDay03";

const fs = require('fs');

const complexInput: string[] = fs.readFileSync('day03/input.txt', 'utf8')
    .split(/\r?\n/)

describe('solutionDay03.ts', () => {
    it('solutionDay03Part1 should be correct for simple sequences', async () => {
        const sequences: string [] = [
            "00100",
            "11110",
            "10110",
            "10111",
            "10101",
            "01111",
            "00111",
            "11100",
            "10000",
            "11001",
            "00010",
            "01010",
        ]

        expect(solutionDay03Part1(sequences)).toBe(198)
    })

    it('solutionDay03Part1 should be correct for complex sequences', async () => {
        expect(solutionDay03Part1(complexInput)).toBe(1071734)
    })

    it('solutionDay03Part2 should be correct for simple sequences', async () => {
        const sequences: string [] = [
            "00100",
            "11110",
            "10110",
            "10111",
            "10101",
            "01111",
            "00111",
            "11100",
            "10000",
            "11001",
            "00010",
            "01010",
        ]

        expect(solutionDay03Part2(sequences)).toBe(230)
    })

    it('solutionDay03Part2 should be correct for complex sequences', async () => {
        expect(solutionDay03Part2(complexInput)).toBe(6124992)
    })
})
