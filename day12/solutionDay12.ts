const createPaths = (input: string[]): Map<string, string[]> => {
    return input.reduce((acc, nodes) => {
        const [start, end] = nodes.split('-');
        acc.set(start, [...(acc.get(start) ?? []), end]);
        acc.set(end, [...(acc.get(end) ?? []), start]);
        return acc;
    }, new Map());
}


export const solutionDay12 = (input: string[]): number => {
    const paths = createPaths(input)
    return fastDFS(paths, 'start', []).length
}

export const solutionDay12Part2 = (input: string[]): number => {
    const paths = createPaths(input)
    return slowDFS(paths, 'start', []).length
}

const fastDFS = (paths: Map<string, string[]>, node: string, visited: string[]): string[][] => {
    const next = [...visited, node];
    const children = paths.get(node);
    const validPaths: string[][] = [];

    if (node === 'end') return [next];

    children?.forEach((child) => {
        if (child.toLowerCase() == child) {
            if (visited.includes(child)) return;
        }

        validPaths.push(...fastDFS(paths, child, next));
    });

    return validPaths;
}

const slowDFS = (paths: Map<string, string[]>, node: string, visited: string[]): string[][] => {
    const next = [...visited, node];
    const children = paths.get(node);
    const validPaths: string[][] = [];

    if (node === 'end') return [next];

    children?.forEach((nodes) => {
        if (nodes.toLowerCase() == nodes) {
            if (nodes === 'start') return;

            const counts = new Set();
            let visitedTwice = false;

            next.forEach((val) => {
                if (val.toLowerCase() != val) return;

                if (counts.has(val)) {
                    visitedTwice = true;
                } else {
                    counts.add(val);
                }
            });

            if (visitedTwice && counts.has(nodes)) return;
        }

        validPaths.push(...slowDFS(paths, nodes, next));
    });

    return validPaths;
}
