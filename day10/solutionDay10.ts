const scoreFor = (character: string): number => {
    if (character == ')') return 3
    if (character == ']') return 57
    if (character == '}') return 1197
    if (character == '>') return 25137

    throw new Error('unknown character')
}

export const solutionDay10Part01 = (chunks: string[]): number => {
    let score = 0;

    for (const chunk of chunks ) {
        const stack: string[] = []
        const characters: string[] = chunk.split('')

        for (const character of characters) {
            if (character === '(' || character === '[' || character === '{' || character === '<') {
                stack.push(character)
            } else {
                const openingCharacter = stack.pop()
                if (openingCharacter === '(' && character != ')') {
                    score += scoreFor(character)
                    break
                }
                if (openingCharacter === '[' && character != ']') {
                    score += scoreFor(character)
                    break
                }
                if (openingCharacter === '{' && character != '}') {
                    score += scoreFor(character)
                    break
                }
                if (openingCharacter === '<' && character != '>') {
                    score += scoreFor(character)
                    break
                }
            }
        }
    }
    return score
}

export const solutionDay10Part02 = (chunks: string[]): number => {
    const scores: number[] = [];

    for (const chunk of chunks ) {
        let scoreOfLine = 0
        const stack: string[] = []
        const characters: string[] = chunk.split('')

        let chunkIncomplete = true;

        for (const character of characters) {
            if (character === '(' || character === '[' || character === '{' || character === '<') {
                stack.push(character)
            } else {
                const openingCharacter = stack.pop()
                if (openingCharacter === '(' && character != ')' ||
                    openingCharacter === '[' && character != ']' ||
                    openingCharacter === '{' && character != '}' ||
                    openingCharacter === '<' && character != '>')
                {
                    chunkIncomplete = false
                    break
                }
            }
        }
        if (chunkIncomplete) {
            while (stack.length > 0) {
                const openingCharacter = stack.pop()
                if (openingCharacter == '(') {
                    scoreOfLine = scoreOfLine*5 + 1
                }
                if (openingCharacter == '[') {
                    scoreOfLine = scoreOfLine*5 + 2
                }
                if (openingCharacter == '{') {
                    scoreOfLine = scoreOfLine*5 + 3
                }
                if (openingCharacter == '<') {
                    scoreOfLine = scoreOfLine*5 + 4
                }
            }
            scores.push(scoreOfLine)
        }
    }

    return scores.sort((a: number, b:number) => a - b)[(scores.length -1)/2]
}
