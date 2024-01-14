// myFunction.test.js
const { test, expect } = require('@jest/globals');
const {
    capitalizeFirstLetter,
    titleCase,
    getInitials,
    compareArrays,
    generateOTPWithLength,
    slugify,
    getTruncateDescription,
    validateText,
    validateEmail,
    validatePassword,
    validateMobileNumber,
    generateRandomPassword,
    formatCurrency,
    CurrencyCode,
    removeDuplicatesFromArray,
    sortArrayByMode,
    reverseString,
    isObjectValuesEmpty,
    checkNotNullAndNotEmpty,
    handleNaN,
    isFalsy,
    isTruthy
} = require('./index.js');

// test case for capitalizeFirstLetter function
describe('Check capitalizeFirstLetter function', () => {
    test('check with string', () => {
        const result = capitalizeFirstLetter("test test");
        expect(result).toBe("Test test");
    });

    test('check without string', () => {
        const result = capitalizeFirstLetter();
        expect(result).toBe(null);
    });

    test('if i pass null or undefined as string', () => {
        const result = capitalizeFirstLetter(undefined);
        expect(result).toBe(null);
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
        expect(result).toBe(null);
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

describe("check generateOTPWithLength function", () => {
    test('should generate a random number with the specified length', () => {
        const length = 4;
        const randomNumber = generateOTPWithLength(length);
        expect(typeof randomNumber).toBe('number');
        expect(randomNumber).toBeGreaterThanOrEqual(Math.pow(10, length - 1));
        expect(randomNumber).toBeLessThanOrEqual(Math.pow(10, length) - 1);
        expect(randomNumber.toString().length).toBe(length);
    });

    test('should handle edge cases', () => {
        const minLength = 4;
        const minNumber = generateOTPWithLength(minLength);
        expect(minNumber.toString().length).toBe(minLength);

        const largeLength = 7;
        const largeNumber = generateOTPWithLength(largeLength);
        expect(largeNumber.toString().length).toBe(largeLength);
    });

    test('should handle edge cases', () => {
        const minLength = 4;
        const minNumber = generateOTPWithLength(minLength, true);
        expect(minNumber.toString().length).toBe(minLength);

        const largeLength = 6;
        const largeNumber = generateOTPWithLength(largeLength, true);
        expect(largeNumber.toString().length).toBe(largeLength);
    });
})

describe('check generateRandomPassword function', () => {
    test('generates a password of the specified length', () => {
        const length = 12;
        const password = generateRandomPassword(length);
        expect(password.length).toBe(length);
    });

    test('includes at least one lowercase character, one uppercase character, and one digit', () => {
        const password = generateRandomPassword();
        expect(/[a-z]/.test(password)).toBe(true);
        expect(/[A-Z]/.test(password)).toBe(true);
        expect(/\d/.test(password)).toBe(true);
    });

    test('contains only valid characters', () => {
        const password = generateRandomPassword();
        const validChars = /^[a-zA-Z0-9!@#$%^&*()-_=+]+$/;
        expect(validChars.test(password)).toBe(true);
    });
});

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

describe('check Validation Functions', () => {
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
        const result = validateMobileNumber("1234567890");
        expect(result).toEqual({ isError: false, errorMessage: 'Valid mobile number' });
    });

    test('validateMobileNumber should return error for an invalid mobile number', () => {
        const result = validateMobileNumber("123456789012");
        expect(result).toEqual({ isError: true, errorMessage: 'Invalid mobile number' });
    });
});


describe('check formatCurrency function', () => {
    test('Formats currency with default options', () => {
        expect(formatCurrency(1234567.89)).toBe('$1,234,567.89');
        expect(formatCurrency(1234567.12343, CurrencyCode.USD, 2, 4)).toBe('$1,234,567.1234');
    });

    test('Formats currency with custom currency code and decimal places', () => {
        expect(formatCurrency(98765, CurrencyCode.EUR, 2, 2)).toBe('€98,765.00');
    });

    test('Formats currency with different currency code', () => {
        expect(formatCurrency(98765.43, CurrencyCode.GBP)).toBe('£98,765.43');
    });

    test('Formats currency with different currency code', () => {
        expect(formatCurrency(98765.43, CurrencyCode.INR)).toBe('₹98,765.43');
    });
});

describe('check removeDuplicatesFromArray function', () => {
    test('Removes duplicates from an array', () => {
        const arrayWithDuplicates = [1, 2, 3, 4, 2, 1, 5, 6, 3];
        const arrayWithoutDuplicates = removeDuplicatesFromArray(arrayWithDuplicates);

        expect(arrayWithoutDuplicates).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
        expect(arrayWithoutDuplicates.length).toBe(6);
    });

    test('Handles an empty array', () => {
        const emptyArray = [];
        const result = removeDuplicatesFromArray(emptyArray);
        expect(result).toEqual([]);
    });

    test('Handles an array with no duplicates', () => {
        const arrayNoDuplicates = [1, 2, 3, 4, 5];
        const result = removeDuplicatesFromArray(arrayNoDuplicates);
        expect(result).toEqual(arrayNoDuplicates);
    });
});

describe('check sortArrayByMode function', () => {
    test('sortArrayByMode sorts array in ascending order by default', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArray = sortArrayByMode(inputArray);

        expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    test('sortArrayByMode sorts array in descending order when mode is "desc"', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArray = sortArrayByMode(inputArray, 'desc');

        expect(sortedArray).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
    });

    test('sortArrayByMode sorts array of objects by a specified key', () => {
        const inputArray = [
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
        ];

        const sortedArray = sortArrayByMode(inputArray, 'asc', 'age');

        expect(sortedArray).toEqual([
            { name: 'Alice', age: 25 },
            { name: 'John', age: 30 },
            { name: 'Bob', age: 35 },
        ]);
    });

    test('sortArrayByMode handles invalid sorting mode and returns the original array', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const sortedArray = sortArrayByMode(inputArray, 'invalidMode');

        expect(sortedArray).toEqual(inputArray);
    });
});

describe('check reverseString function', () => {
    test('Reverses a simple string', () => {
        const result = reverseString('Hello');
        expect(result).toBe('olleH');
    });

    test('Handles empty string', () => {
        const result = reverseString('');
        expect(result).toBe(null);
    });

    test('Reverses a string with spaces', () => {
        const result = reverseString('Hello, World!');
        expect(result).toBe('!dlroW ,olleH');
    });
});

describe('check isObjectValuesEmpty function', () => {
    test('should return false when there are no empty values', () => {
        const obj = {
            name: 'John',
            age: 25,
            city: 'New York'
        };
        expect(isObjectValuesEmpty(obj)).toBe(false);
    });

    test('should return true when there is at least one empty value', () => {
        const obj = {
            name: 'Alice',
            age: null,
            city: 'London'
        };
        expect(isObjectValuesEmpty(obj)).toBe(true);
    });

    test('should handle multiple empty values and return true', () => {
        const obj = {
            name: '',
            age: 30,
            city: undefined
        };
        expect(isObjectValuesEmpty(obj)).toBe(true);
    });

    test('should handle an empty object and return false', () => {
        const obj = {};
        expect(isObjectValuesEmpty(obj)).toBe(false);
    });
});


describe('check checkNotNullAndNotEmpty function', () => {
    test('returns true for a non-empty string', () => {
        expect(checkNotNullAndNotEmpty('Hello')).toBe(true);
    });

    test('returns false for undefined', () => {
        expect(checkNotNullAndNotEmpty(undefined)).toBe(false);
    });
});

describe('check handleNaN function', () => {
    test('returns the value for a valid number', () => {
        expect(handleNaN(42)).toBe(42);
    });

    test('returns default value for NaN', () => {
        expect(handleNaN('not a number', 10)).toBe(10);
    });
});

describe('check isFalsy function', () => {
    test('returns true for falsy value', () => {
        expect(isFalsy(null)).toBe(true);
    });

    test('returns false for truthy value', () => {
        expect(isFalsy('hello')).toBe(false);
    });
});

describe('check isTruthy function', () => {
    test('returns true for truthy value', () => {
        expect(isTruthy('hello')).toBe(true);
    });

    test('returns false for falsy value', () => {
        expect(isTruthy(null)).toBe(false);
    });
});

