/*
    1   4   7   8   length
0   2   3   3   6       6

2   1   2   2   5       5
3   2   3   3   5       5
5   1   3   2   5       5
6   1   3   1   6       6

9   2   4   3   5       6

9 contains all of 4
0 contains 6 of 8

*/
const numberSpecs = [
    { value: 0, length: 6, matches: { one: 2, four: 3, seven: 3, eight: 6 } },
    { value: 2, length: 5, matches: { one: 1, four: 2, seven: 2, eight: 5 } },
    { value: 3, length: 5, matches: { one: 2, four: 3, seven: 3, eight: 5 } },
    { value: 5, length: 5, matches: { one: 1, four: 3, seven: 2, eight: 5 } },
    { value: 6, length: 6, matches: { one: 1, four: 3, seven: 1, eight: 6 } },
    { value: 9, length: 6, matches: { one: 2, four: 4, seven: 3, eight: 5 } }
]

const numberOfMatchingChars = (input: string, searchChars: string): number => {
    let cntOfMatchingChars = 0;

    for (let index = 0; index < searchChars.length; index++) {
        if (input.indexOf(searchChars.charAt(index)) != -1) {
            cntOfMatchingChars++
        }
    }

    return cntOfMatchingChars
}

const understandDigitLine = (digitLine: string): number => {
    const signalPattern: string [] = digitLine.split(' | ')[0].split(' ')
    const outputValue: string [] = digitLine.split(' | ')[1].split(' ')

    let numberOfDigits = 0

    outputValue.forEach((value: string) => {
        if (value.length == 2 || value.length == 3 || value.length == 4 || value.length == 7) {
            numberOfDigits++
        }
    })

    return numberOfDigits
}

export const solutionDay08Part1 = (linesOfDigits: string[]): number => {
    let numberOfDigits = 0

    linesOfDigits.forEach((digitLine: string) => {
        numberOfDigits += understandDigitLine(digitLine)
    })

    return numberOfDigits
}

const isSix = (input: string, correspondingDigit: string): boolean => {
    return (
        input.split('').filter((x) => correspondingDigit.split('').includes(x)).length === 1
    )
}

const isZero = (input: string, correspondingDigit: string): boolean => {
    return (
        correspondingDigit.split('').filter((x) => !input.split('').includes(x)).length > 0
    );
}

const isFive = (input: string, correspondingDigit: string): boolean => {
    return (
        input.split('').filter((x) => correspondingDigit.split('').includes(x)).length === 5
    );
}

const isThree = (input: string, correspondingDigit: string): boolean => {
    return (
        input.split('').filter((x) => correspondingDigit.split('').includes(x)).length === 5
    );
}

const decodeAndMapDigitLine = (digitLine: string): number => {
    const signalPattern: string [] = digitLine.split(' | ')[0].split(' ')
    const outputValue: string [] = digitLine.split(' | ')[1].split(' ')

    const digitMap: { [key: string]: string } = {}

    signalPattern.reduce((acc, current) => {
        if (current.length === 2) digitMap['1'] = current
        if (current.length === 3) digitMap['7'] = current
        if (current.length === 4) digitMap['4'] = current
        if (current.length === 7) digitMap['8'] = current
        return acc
    }, digitMap)

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (pattern.length === 6 && isSix(pattern, digitMap['1'])) {
            digitMap['6'] = pattern
            break
        }
    }

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (
            pattern.length === 6 &&
            isZero(pattern, digitMap['4'])
        ) {
            digitMap['0'] = pattern
            break
        }
    }

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (pattern.length === 6) {
            digitMap['9'] = pattern
            break
        }
    }

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (pattern.length === 5 && isFive(pattern, digitMap['6'])) {
            digitMap['5'] = pattern
            break
        }
    }

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (pattern.length === 5 && isThree(pattern, digitMap['9'])) {
            digitMap['3'] = pattern
            break
        }
    }

    for (let index = 0; index < signalPattern.length; index++) {
        let pattern = signalPattern[index];

        if (Object.values(digitMap).includes(pattern)) continue

        if (pattern.length === 5) {
            digitMap['2'] = pattern
            break
        }
    }

    const result = outputValue.reduce((acc, current) => {
        Object.entries(digitMap).filter(([key, value]) => {
            if (
                current.split('').sort().join('') === value.split('').sort().join('')
            ) {
                acc += key;
            }
        });
        return acc;
    }, '');

    return Number(result);
}

export const solutionDay08Part2 = (linesOfDigits: string[]): number => {
    let numberOfDigits = 0

    linesOfDigits.forEach((digitLine: string) => {
        numberOfDigits += decodeAndMapDigitLine(digitLine)
    })

    return numberOfDigits
}
