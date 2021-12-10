import {solutionTemplate} from "./solutionTemplate";

const fs = require('fs');

const readFileIntoLines = (path: string): string[] => {
    return fs.readFileSync(path, 'utf8')
        .split(/\r?\n/)
}

describe('solutionTemplate.ts', () => {
    it('should be correct', async () => {
        expect(solutionTemplate()).toBeTruthy()
    })
})
