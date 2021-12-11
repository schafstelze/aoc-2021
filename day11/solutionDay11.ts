type Flash = {
    x: number,
    y: number
}

const increaseAllOctoELevels = (octoLevels: number[][]): void => {
    for (let y = 0; y < octoLevels.length; y++) {
        for (let x = 0; x < octoLevels[y].length; x++) {
            octoLevels[y][x] = octoLevels[y][x] + 1
        }
    }
}

const increaseAdjacentOctos = (octoLevels: number[][], flash: Flash): void => {
    for (let y = (flash.y - 1); y < (flash.y + 2); y++) {
        for (let x = (flash.x - 1); x < (flash.x + 2); x++) {
            let currentLevel
            try {
                currentLevel = octoLevels[y][x]
            } catch (e) {
                // ignore
            }
            if (currentLevel) {
                octoLevels[y][x] = currentLevel + 1
            }
        }
    }
}

const flashOctopus = (octoLevels: number[][], x: number, y: number): Flash => {
    octoLevels[y][x] = 0
    const flash: Flash = { x: x, y: y }

    increaseAdjacentOctos(octoLevels, flash)
    
    return flash
}

const hasFlashed = (flashesOfDay: Flash[], x: number, y: number): boolean => {
    flashesOfDay.forEach((flash: Flash) => { 
        if (flash.x == x && flash.y == y) {
            return true
        }
    })

    return false
}

const flashDay = (octoLevels: number[][]): number => {
    let flashesOfDay: Flash[] = []
    
    increaseAllOctoELevels(octoLevels)

    let numberOfFlashesBefore: number = 0
    let index = 0
    do {
        index++
        numberOfFlashesBefore = flashesOfDay.length

        for (let y = 0; y < octoLevels.length; y++) {
            for (let x = 0; x < octoLevels[y].length; x++) {
                if (octoLevels[y][x] > 9) {
                    flashesOfDay.push(flashOctopus(octoLevels, x, y))
                }
            }
        }
    } while (numberOfFlashesBefore != flashesOfDay.length)

    return flashesOfDay.length
}

export const solutionDay11 = (octoLevels: number[][]): number => {
    let cntOfFlashes = 0

    for (let day = 1; day <= 100; day++) {
        cntOfFlashes += flashDay(octoLevels)
    }

    return cntOfFlashes
}

export const solutionDay11Part2 = (octoLevels: number[][]): number => {
    let cntOfFlashes = 0
    let numberOfDay = 0
    do {
        numberOfDay++;
        cntOfFlashes = flashDay(octoLevels)
    } while (cntOfFlashes != 100)

    return numberOfDay
}
