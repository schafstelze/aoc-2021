export const solutionDay03Part1 = (sequences: string[]): number => {
    let gammaRate: string = "", epsilonRate: string = ""

    for (let index = 0; index < sequences[0].length; index++) {
        let countOfZeros = 0
        let countOfOnes = 0

        sequences.forEach(sequence => {
            if (sequence.charAt(index) === '0') {
                countOfZeros++
            } else {
                countOfOnes++
            }
        })
        if (countOfZeros > countOfOnes) {
            gammaRate += "0"
            epsilonRate +="1"
        } else {
            gammaRate += "1"
            epsilonRate +="0"
        }
    }

    console.log(`gammaRate: ${gammaRate}, epsilonRate: ${epsilonRate}`)

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

export const solutionDay03Part2 = (sequences: string[]): number => {
    let oxygenRates: string[] = sequences.slice(), co2Rates: string[] = sequences.slice()

    let index = 0
    while (oxygenRates.length > 1) {
        let countOfZeros = 0
        let countOfOnes = 0

        oxygenRates.forEach(sequence => {
            if (sequence.charAt(index) === '0') {
                countOfZeros++
            } else {
                countOfOnes++
            }
        })
        if (countOfZeros > countOfOnes) {
            oxygenRates = oxygenRates.filter(rate => rate.charAt(index) === '0')
        } else {
            oxygenRates = oxygenRates.filter(rate => rate.charAt(index) === '1')
        }
        index++
    }

    index = 0
    while (co2Rates.length > 1) {
        let countOfZeros = 0
        let countOfOnes = 0

        co2Rates.forEach(sequence => {
            if (sequence.charAt(index) === '0') {
                countOfZeros++
            } else {
                countOfOnes++
            }
        })
        if (countOfZeros > countOfOnes) {
            co2Rates = co2Rates.filter(rate => rate.charAt(index) === '1')
        } else {
            co2Rates = co2Rates.filter(rate => rate.charAt(index) === '0')
        }
        index++
    }
    console.log(`oxygenRates: ${oxygenRates}, co2Rates: ${co2Rates}`)

    return parseInt(oxygenRates[0], 2) * parseInt(co2Rates[0], 2)
}
