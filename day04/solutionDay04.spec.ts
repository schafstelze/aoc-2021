import {Bingo, Board, emptyBoard, Field, solutionday04Part1, solutionday04Part2} from "./solutionDay04";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
}

const parseIntoBingo = (input: string[]): Bingo => {
    const bingo: Bingo = {
        drawings: [],
        boards: []
    }

    let currentBoard: Board = emptyBoard()
    input.forEach((line: string) => {
        if (line.indexOf(',') > 0) {
            bingo.drawings = line.split(',').map((item: string) => Number(item))
        } else {
            if (line.length === 0 || !line.trim()) {
                if (currentBoard.fields.length > 0) {
                    bingo.boards.push(currentBoard)
                }

                currentBoard = emptyBoard()
            } else {
                const fields: Field[] = []
                const values: string[] = line.trim().split(/\s+/)
                values.forEach((item: string) => {
                    fields.push({
                        value: Number(item),
                        matched: false
                    })
                })

                currentBoard.fields.push(fields)
            }
        }
    })

    bingo.boards.push(currentBoard)

    return bingo
}


describe('solutionDay04.ts', () => {
    it('part1 input1 should be correct', async () => {
        expect(solutionday04Part1(parseIntoBingo(readFileIntoLines('day04/input1.txt')))).toBe(4512)
    })

    it('part1 input2 should be correct', async () => {
        expect(solutionday04Part1(parseIntoBingo(readFileIntoLines('day04/input2.txt')))).toBe(87456)
    })

    it('part2 input1 should be correct', async () => {
        expect(solutionday04Part2(parseIntoBingo(readFileIntoLines('day04/input1.txt')))).toBe(1924)
    })

    it('part2 input2 should be correct', async () => {
        expect(solutionday04Part2(parseIntoBingo(readFileIntoLines('day04/input2.txt')))).toBe(15561)
    })
})
