const heightPointFor = (heightMap: number[][], row: number, column: number): number | null => {
    try {
        return heightMap[row][column]
    } catch (e) {
        // ignore silently
    }
    return null
}

export const solutionDay09Part1 = (heightMap: number[][]): number => {
    const lowPoints: number[] = []

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
                lowPoints.push(heightMap[row][column])
            }
        }
    }

    return lowPoints.reduce((pv: number, cv: number) => pv + cv) + lowPoints.length
}
