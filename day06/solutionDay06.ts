export const solutionDay06 = (swarm: number[], daysToGrow: number): number => {
    const timers: number[] = [0,0,0,0,0,0,0,0,0]
    swarm.forEach((fish: number) => timers[fish]++)

    for (let day = 0; day < daysToGrow; day++) {
        const zeros = timers[0]

        for (let index = 1; index < 9; index ++) {
            timers[index - 1] = timers[index]
        }

        timers[6] += zeros
        timers[8] = zeros
    }

    return timers.reduce((pv, cv) => pv + cv, 0)
}
