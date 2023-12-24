// myFunction.test.js
const { capitalizeFirstLetter } = require('./index.js');

describe('Check capitalizeFirstLetter function', () => {
    test('check with string', () => {
        const result = capitalizeFirstLetter("dhaval tank");
        expect(result).toBe("Dhaval tank");
    });

    test('check without string', () => {
        const result = capitalizeFirstLetter();
        expect(result).toBe("");
    });

    test('if i pass null or undefined as string', () => {
        const result = capitalizeFirstLetter(undefined);
        expect(result).toBe("");
    });
})