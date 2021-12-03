type DigitCount = {
    zeros: number
    ones: number
}

const countDigits = (sequences: string[], index: number): DigitCount => {
    const digitCount: DigitCount = {
        zeros: 0,
        ones: 0
    }

    sequences.forEach(sequence => {
        if (sequence.charAt(index) === '0') {
            digitCount.zeros++
        } else {
            digitCount.ones++
        }
    })

    return digitCount
}

export const solutionDay03Part1 = (sequences: string[]): number => {
    let gammaRate: string = "", epsilonRate: string = ""

    for (let index = 0; index < sequences[0].length; index++) {
        const digitCount = countDigits(sequences, index)

        if (digitCount.zeros > digitCount.ones) {
            gammaRate += "0"
            epsilonRate +="1"
        } else {
            gammaRate += "1"
            epsilonRate +="0"
        }
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

export const solutionDay03Part2 = (sequences: string[]): number => {
    let oxygenRates: string[] = sequences.slice(), co2Rates: string[] = sequences.slice()

    for (let index = 0; index < sequences[0].length; index++) {
        const digitCount = countDigits(oxygenRates, index)

        const digitToFilter: string = digitCount.zeros > digitCount.ones ? '0' : '1'

        oxygenRates = oxygenRates.filter(rate => rate.charAt(index) === digitToFilter)

        if (oxygenRates.length === 1) break
    }

    for (let index = 0; index < sequences[0].length; index++) {
        const digitCount = countDigits(co2Rates, index)

        const digitToFilter: string = digitCount.zeros > digitCount.ones ? '1' : '0'

        co2Rates = co2Rates.filter(rate => rate.charAt(index) === digitToFilter)

        if (co2Rates.length === 1) break
    }

    return parseInt(oxygenRates[0], 2) * parseInt(co2Rates[0], 2)
}
