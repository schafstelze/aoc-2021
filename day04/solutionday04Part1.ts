export type Field = {
    value: number,
    matched: boolean
}

export type Board = {
    fields: Field[][]
}

export const emptyBoard = (): Board => {
    return {
        fields: []
    }
}

export type Bingo = {
    drawings: number[]
    boards: Board[]
}

const scoreOfCompletedBoard = (board: Board): number =>  {
    for (let row = 0; row < 5; row ++) {
        const horizontalBingo: boolean =
            board.fields[row][0].matched &&
            board.fields[row][1].matched &&
            board.fields[row][2].matched &&
            board.fields[row][3].matched &&
            board.fields[row][4].matched

        const verticalBingo: boolean =
            board.fields[0][row].matched &&
            board.fields[1][row].matched &&
            board.fields[2][row].matched &&
            board.fields[3][row].matched &&
            board.fields[4][row].matched

        if (horizontalBingo || verticalBingo) {
            let sumOfUnmarkedNumbers = 0;
            for (let row = 0; row < 5; row ++) {
                for (let column = 0; column < 5; column ++) {
                    if (!board.fields[row][column].matched) {
                        sumOfUnmarkedNumbers += board.fields[row][column].value
                    }
                }
            }
            return sumOfUnmarkedNumbers
        }
    }

    return 0
}

const markFieldInBoard = (board: Board, fieldValue: number): void => {
    for (let row = 0; row < 5; row ++) {
        for (let column = 0; column < 5; column++) {
            if (board.fields[row][column].value === fieldValue) {
                board.fields[row][column].matched = true
                return
            }
        }
    }
}

export const solutionday04Part1 = (bingo: Bingo): number => {
    for (const drawing of bingo.drawings) {
        for (const board of bingo.boards) {
            markFieldInBoard(board, drawing)
            const score = scoreOfCompletedBoard(board)
            if (score > 0) {
                return score * drawing
            }
        }
    }

    return 0
}

const allBoardsFinished = (boards: Board[]): boolean => {
    for (const board of boards) {
        if (scoreOfCompletedBoard(board) === 0) return false
    }

    return true
}

export const solutionday04Part2 = (bingo: Bingo): number => {
    for (const drawing of bingo.drawings) {
        for (const board of bingo.boards) {
            markFieldInBoard(board, drawing)
            const score = scoreOfCompletedBoard(board)
            if (score > 0 && allBoardsFinished(bingo.boards)) {
                return score * drawing
            }
        }
    }

    return 0
}
