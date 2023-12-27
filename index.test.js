// myFunction.test.js
const { capitalizeFirstLetter, titleCase, getInitials, addEllipsis } = require('./index.js');

// test case for capitalizeFirstLetter function
describe('Check capitalizeFirstLetter function', () => {
    test('check with string', () => {
        const result = capitalizeFirstLetter("test test");
        expect(result).toBe("Test test");
    });

    test('check without string', () => {
        const result = capitalizeFirstLetter();
        expect(result).toBe("");
    });

    test('if i pass null or undefined as string', () => {
        const result = capitalizeFirstLetter(undefined);
        expect(result).toBe("");
    });
});

// test case for titleCase function
describe("check titleCase function", () => {
    test("checking with string", () => {
        const result = titleCase("test test");
        expect(result).toBe("Test Test");
    });

    test("checking with string and & sign", () => {
        const result = titleCase("test and test", "And");
        expect(result).toBe("Test & Test");
    });

    test("checking with string", () => {
        const result = titleCase("test and test", "And");
        expect(result).toBe("Test & Test");
    });

    test("checking with null or undefined", () => {
        const result = titleCase(null);
        expect(result).toBe("");
    });
});


describe('check getInitials function', () => {
    test('check getInitials with string', () => {
        const result = getInitials("test");
        expect(result).toBe("T");
    });

    test('check getInitials with out string', () => {
        const result = getInitials("");
        expect(result).toBe("?");
    });

    test('check getInitials with undefined or null', () => {
        const result = getInitials(null);
        expect(result).toBe("?");
    });
});

describe('check addEllipsis function', () => {
    test('check with string', () => {
        const result = addEllipsis("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a.");
        expect(result).toBe("Lorem ipsu...", 10)
    })

    test('check with string which have length 20', () => {
        const result = addEllipsis("Lorem ipsum", 20);
        expect(result).toBe("Lorem ipsum")
    })
});
