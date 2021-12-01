export const solutionDay01Part1 = (measurements: number[]): number => {
    let numberOfIncreases = 0

    for (let index = 0; index < measurements.length; index++) {
        if (index == 0) {
            continue
        }

        if (measurements[index] - measurements[index - 1] > 0) {
            numberOfIncreases++
        }
    }

    return numberOfIncreases
}

export const solutionDay01Part2 = (measurements: number[]): number => {
    let numberOfIncreases = 0

    for (let index = 0; index < measurements.length - 3; index++) {
        const firstWindow: number = measurements[index] + measurements[index + 1] + measurements[index + 2]
        const secondWindow: number = measurements[index + 1] + measurements[index + 2] + measurements[index + 3]

        if (secondWindow - firstWindow > 0) {
            numberOfIncreases++
        } else {
        }
    }

    return numberOfIncreases
}
