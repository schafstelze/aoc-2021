const heightPointFor = (heightMap: number[][], row: number, column: number): number | null => {
    try {
        return heightMap[row][column]
    } catch (e) {
        // ignore silently
    }
    return null
}

type Position = {
    row: number,
    column: number
}

const findLowPoints = (heightMap: number[][]): Position[] => {
    const lowPoints: Position[] = []

    for (let row = 0; row < heightMap.length; row++) {
        for (let column = 0; column < heightMap[row].length; column++) {
            const adjacentPoints: number[] = []
            adjacentPoints.push(heightPointFor(heightMap, row - 1, column))
            adjacentPoints.push(heightPointFor(heightMap, row + 1, column))
            adjacentPoints.push(heightPointFor(heightMap, row, column - 1))
            adjacentPoints.push(heightPointFor(heightMap, row, column + 1))

            const lowerPointExists: boolean = adjacentPoints.filter((adjacentPoint: number) => adjacentPoint != null && adjacentPoint != undefined)
                .filter((adjacentPoint: number) => adjacentPoint <= heightMap[row][column]).length > 0

            if(!lowerPointExists) {
                lowPoints.push({
                    row: row,
                    column: column
                })
            }
        }
    }

    return lowPoints
}

export const solutionDay09Part1 = (heightMap: number[][]): number => {
    const lowPoints: number[] = []

    findLowPoints((heightMap)).forEach((position: Position) => {
        lowPoints.push(heightMap[position.row][position.column])
    })

    return lowPoints.reduce((pv: number, cv: number) => pv + cv) + lowPoints.length
}

const isBasinPosition = (heightMap: number[][], point: Position, basinMiddle: number): boolean => {
    const heightPoint: number | null = heightPointFor(heightMap, point.row, point.column);

    return heightPoint && heightPoint < 9 && heightPoint != basinMiddle;
}

const oneUp = (point: Position): Position => { return { row: point.row - 1, column: point.column } }
const oneDown = (point: Position): Position => { return { row: point.row + 1, column: point.column } }
const oneLeft = (point: Position): Position => { return { row: point.row, column: point.column - 1 } }
const oneRight = (point: Position): Position => { return { row: point.row, column: point.column + 1 } }

const addIfNotIncluded = (positions: Position[], toAdd: Position): boolean => {
    for (const position of positions) {
        if (position.row == toAdd.row && position.column == toAdd.column) {
            return false
        }
    }
    positions.push(toAdd)
    return true
}

const findBasinPositions = (basinPoints: Position[], heightMap: number[][], point: Position): void => {
    const basinMiddle: number = heightMap[point.row][point.column]
    const up: Position = oneUp(point)
    const down: Position = oneDown(point)
    const left: Position = oneLeft(point)
    const right: Position = oneRight(point)

    if (isBasinPosition(heightMap, up, basinMiddle)) {
        if (addIfNotIncluded(basinPoints, up)) findBasinPositions(basinPoints, heightMap, up)
    }

    if (isBasinPosition(heightMap, down, basinMiddle)) {
        if (addIfNotIncluded(basinPoints, down)) findBasinPositions(basinPoints, heightMap, down)
    }

    if (isBasinPosition(heightMap, left, basinMiddle)) {
        if (addIfNotIncluded(basinPoints, left)) findBasinPositions(basinPoints, heightMap, left)
    }

    if (isBasinPosition(heightMap, right, basinMiddle)) {
        if (addIfNotIncluded(basinPoints, right)) findBasinPositions(basinPoints, heightMap, right)
    }
}

export const solutionDay09Part2 = (heightMap: number[][]): number => {
    const bassins: number[] = []

    findLowPoints((heightMap)).forEach((lowPoint: Position) => {
        const basinPositions: Position[] = [lowPoint]
        findBasinPositions(basinPositions, heightMap, lowPoint)

        bassins.push(basinPositions.length)
    })

    return bassins.sort((a: number, b:number) => a - b).slice(bassins.length - 3, bassins.length).reduce((pv, cv) => pv * cv)
}

