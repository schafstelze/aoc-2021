import {solutionDay01Part1, solutionDay01Part2} from "./solutionDay01";
const fs = require('fs');

const complexInput: number[] = fs.readFileSync('day01/input.txt', 'utf8')
    .split(/\r?\n/)
    .map((item: string) => Number(item))

describe('solution.ts', () => {
    it('solution part1 should be correct on simple input', async () => {
        const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

        expect(solutionDay01Part1(input)).toBe(7)
    })

    it('solution part2 should be correct on complex input', async () => {
        expect(solutionDay01Part1(complexInput)).toBe(1298)
    })

    it('solution part2 should be correct on simple input', async () => {
        const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

        expect(solutionDay01Part2(input)).toBe(5)
    })

    it('solution part2 should be correct on complex input', async () => {
        expect(solutionDay01Part2(complexInput)).toBe(1248)
    })
})
