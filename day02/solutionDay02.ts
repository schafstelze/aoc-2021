export const solutionDay02Part1 = (movements: string[]): number => {
    let position = 0
    let depth = 0

    movements.forEach(movement => {
        const [command, amount] = movement.split(' ')

        switch (command) {
            case 'forward':
                position += Number(amount)
                break
            case 'down':
                depth += Number(amount)
                break
            case 'up':
                depth -= Number(amount)
                break
            default:
                throw new Error(`Unknown command ${command}`)
        }
    })

    return position * depth
}

export const solutionDay02Part2 = (movements: string[]): number => {
    let position = 0
    let depth = 0
    let aim = 0

    movements.forEach(movement => {
        const [command, amount] = movement.split(' ')

        switch (command) {
            case 'forward':
                position += Number(amount)
                depth += aim * Number(amount)
                break
            case 'down':
                aim += Number(amount)
                break
            case 'up':
                aim -= Number(amount)
                break
            default:
                throw new Error(`Unknown command ${command}`)
        }
    })

    return position * depth
}
