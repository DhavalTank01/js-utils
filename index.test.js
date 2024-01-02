// myFunction.test.js
const { test, expect } = require('@jest/globals');
const {
    capitalizeFirstLetter,
    titleCase,
    getInitials,
    compareArrays,
    getRandomOTPWithLength,
    slugify,
    getTruncateDescription,
    validateText,
    validateEmail,
    validatePassword,
    validateMobileNumber
} = require('./index.js');

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
    test('check getInitials with single word', () => {
        const result = getInitials("test");
        expect(result).toBe("T");
    });

    test('check getInitials with two word', () => {
        const result = getInitials("test user");
        expect(result).toBe("TU");
    });

    test('check getInitials with three word', () => {
        const result = getInitials("test user test");
        expect(result).toBe("TT");
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

describe('check getTruncateDescription function', () => {
    test('check with string', () => {
        const result = getTruncateDescription("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a.");
        console.log("🚀 ~ file: index.test.js:89 ~ test ~ result:", result)
        expect(result).toBe("Lorem ipsu...");
    })

    test('check with string which have length 20', () => {
        const result = getTruncateDescription("Lorem ipsum", 5);
        expect(result).toBe("Lorem...");
    })
});

describe("check compareArrays function", () => {
    test('check array', () => {
        let result = compareArrays([1, 2, 3], [3, 1, 2]);
        expect(result).toBe(true);
    })

    test('check array', () => {
        let result = compareArrays([1, 2, 3], [4, 1, 2]);
        expect(result).toBe(false);
    })
})

describe("check getRandomOTPWithLength function", () => {
    test('should generate a random number with the specified length', () => {
        const length = 4;
        const randomNumber = getRandomOTPWithLength(length);
        expect(typeof randomNumber).toBe('number');
        expect(randomNumber).toBeGreaterThanOrEqual(Math.pow(10, length - 1));
        expect(randomNumber).toBeLessThanOrEqual(Math.pow(10, length) - 1);
        expect(randomNumber.toString().length).toBe(length);
    });

    test('should handle edge cases', () => {
        const minLength = 1;
        const minNumber = getRandomOTPWithLength(minLength);
        expect(minNumber.toString().length).toBe(minLength);

        const largeLength = 7;
        const largeNumber = getRandomOTPWithLength(largeLength);
        expect(largeNumber.toString().length).toBe(largeLength);
    });
})

describe('check slugify function', () => {
    test('converts a string to a slug with default separator', () => {
        const result = slugify('Hello World');
        expect(result).toBe('hello-world');
    });

    test('converts a string to a slug with custom separator', () => {
        const result = slugify('Hello World', '_');
        expect(result).toBe('hello_world');
    });

    test('handles special characters and multiple spaces', () => {
        const result = slugify('  This is $%^a   test!  ');
        expect(result).toBe('this-is-a-test');
    });

    test('handles underscores and trailing dash', () => {
        const result = slugify('Some_Text_With-Trailing-Dash-');
        expect(result).toBe('some-text-with-trailing-dash');
    });
});

describe('Validation Functions', () => {
    test('validateText should return valid for non-empty alphabetic text', () => {
        const result = validateText('John Doe');
        expect(result).toEqual({ isError: false, errorMessage: 'Valid input' });
    });

    test('validateText should return error for empty text', () => {
        const result = validateText('');
        expect(result).toEqual({ isError: true, errorMessage: 'This field must not be empty.' });
    });

    test('validateEmail should return valid for a valid email', () => {
        const result = validateEmail('test@example.com');
        expect(result).toEqual({ isError: false, errorMessage: 'Valid email' });
    });

    test('validateEmail should return error for an invalid email', () => {
        const result = validateEmail('invalid-email');
        expect(result).toEqual({ isError: true, errorMessage: 'Invalid email' });
    });

    test('validatePassword should return valid for a valid password', () => {
        const result = validatePassword('Abc@1234');
        expect(result).toEqual({ isError: false, errorMessage: 'Valid password' });
    });

    test('validatePassword should return error for an invalid password', () => {
        const result = validatePassword('weakpassword');
        expect(result).toEqual({
            isError: true,
            errorMessage: 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.'
        });
    });

    test('validateMobileNumber should return valid for a valid mobile number', () => {
        const result = validateMobileNumber('1234567890');
        expect(result).toEqual({ isError: false, errorMessage: 'Valid mobile number' });
    });

    test('validateMobileNumber should return error for an invalid mobile number', () => {
        const result = validateMobileNumber('invalidnumber');
        expect(result).toEqual({ isError: true, errorMessage: 'Invalid mobile number' });
    });
});
