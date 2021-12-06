export type Line = {
    start: Position,
    end: Position
}

export type Position = {
    x: number,
    y: number,
    timesTouched: number
}

const isHorizontalLine = (line: Line): boolean => {
    // console.log(`isHorizontalLine: ${line.start.y === line.end.y}`)

    return line.start.y === line.end.y
}

const isVerticalLine = (line: Line): boolean => {
    // console.log(`isVerticalLine: ${line.start.x === line.end.x}`)

    return line.start.x === line.end.x
}

const isDiagonalPositive = (line: Line): boolean => {
    // console.log(`isDiagonalPositive: ${(line.end.y - line.start.y) / (line.end.x - line.start.x) === 1}`)

    return (line.end.y - line.start.y) / (line.end.x - line.start.x) === 1
}

const isDiagonalNegative = (line: Line): boolean => {
    // console.log(`isDiagonalNegative: ${(line.end.y - line.start.y) / (line.end.x - line.start.x) === -1}`)

    return (line.end.y - line.start.y) / (line.end.x - line.start.x) === -1
}

const touchPosition = (touchedPositions: Position[], x: number, y: number): void => {
    // console.log(`touchPosition: x${x}, y${y}`)
    const existingTouch = touchedPositions.find((touchedPosition: Position) => touchedPosition.x === x && touchedPosition.y === y)

    if (existingTouch) {
        existingTouch.timesTouched += 1
    } else {
        touchedPositions.push({
            x: x,
            y: y,
            timesTouched: 1
        })
    }
}

export const solutionDay05Part1 = (lines: Line[], includeDiagonalLines: boolean): number => {
    const touchedPositions: Position[] = []

    for (const line of lines) {
        // console.log(`currentLine: ${JSON.stringify(line)}`)
        if (isHorizontalLine(line)) {
            const startIndex: number = line.start.x > line.end.x ? line.end.x : line.start.x
            const endIndex: number = line.start.x > line.end.x ? line.start.x : line.end.x

            for (let index = startIndex; index <= endIndex; index++) {
                touchPosition(touchedPositions, index, line.start.y)
            }
        } else if (isVerticalLine(line)) {
            const startIndex: number = line.start.y > line.end.y ? line.end.y : line.start.y
            const endIndex: number = line.start.y > line.end.y ? line.start.y : line.end.y

            for (let index = startIndex; index <= endIndex; index++) {
                touchPosition(touchedPositions, line.start.x, index)
            }
        } else if (includeDiagonalLines) {
            if (isDiagonalPositive(line)) {
                if (line.start.x < line.end.x) {
                    let currentX = line.start.x
                    let currentY = line.start.y

                    while (currentX <= line.end.x) {
                        touchPosition(touchedPositions, currentX, currentY)
                        currentX += 1
                        currentY += 1
                    }
                } else {
                    let currentX = line.start.x
                    let currentY = line.start.y

                    while (currentX >= line.end.x) {
                        touchPosition(touchedPositions, currentX, currentY)
                        currentX -= 1
                        currentY -= 1
                    }
                }
            } else if (isDiagonalNegative(line)) {
                if (line.start.x < line.end.x) {
                    let currentX = line.start.x
                    let currentY = line.start.y

                    while (currentX <= line.end.x) {
                        touchPosition(touchedPositions, currentX, currentY)
                        currentX += 1
                        currentY -= 1
                    }
                } else {
                    let currentX = line.start.x
                    let currentY = line.start.y

                    while (currentX >= line.end.x) {
                        touchPosition(touchedPositions, currentX, currentY)
                        currentX -= 1
                        currentY += 1
                    }
                }
            }
        }
    }

    return touchedPositions.filter((touchedPosition: Position) => touchedPosition.timesTouched > 1).length
}
