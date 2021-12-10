const median = (numbers: number[]): number => {
    const half: number = Math.floor(numbers.length / 2);
    const sorted: number[] = numbers.sort((a, b) => a - b);

    return numbers.length %2 !== 0 ? sorted[half] : (sorted[half - 1] + sorted[half]) / 2
}

const factorial = (num: number): number => {
    let result = 0;
    for (let i = 1; i <= num; i++) result += i;
    return result;
}

export const solutionDay07Part1 = (input: number[]): number => {
    const numbers = input.slice()
    const m = median(numbers);

    return numbers.reduce((acc, current) => (acc += Math.abs(current - m)), 0);
}

export const solutionDay07Part2 = (input: number[]): number => {
    const numbers = input.slice()
    const lowestSums = [];

    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
        let total = 0;
        numbers.forEach((subject) => (total += factorial(Math.abs(subject - i))));
        lowestSums.push(total);
    }

    return Math.min(...lowestSums);
}
