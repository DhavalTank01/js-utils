const capitalizeFirstLetter = (str) => {
    try {
        if (!str)
            return null;
        return str?.trim()?.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : "";
    } catch (error) {
        console.error(error)
        return null;
    }
}

const titleCase = (str, key = null) => {
    try {
        if (!str)
            return null;
        const text = str.replace(/_/g, " ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return key === "And" ? text.replace("And", "&") : text;
    } catch (error) {
        console.error(error)
        return null;
    }
};

const getInitials = (name) => {
    try {
        if (typeof name !== 'string' || name.trim() === '') return "?";
        const words = name.trim().split(" ").map(latter => latter[0].toUpperCase()).join("");
        return words.length > 1 ? words[0] + words[words.length - 1] : words;
    } catch (error) {
        console.error(error);
    }
};

const getTruncateDescription = (text, maxLength = 10) => {
    try {
        return !text ? "" : text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const compareArrays = (arr1, arr2) => {
    try {
        return arr1.length === arr2.length && arr1.slice().sort().every((value, index) => value === arr2.slice().sort()[index]);
    } catch (error) {
        console.error(error);
        return null;
    }
}

const generateOTPWithLength = (length, isAlphaNumeric = false) => {
    try {
        if (isAlphaNumeric) {
            const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        } else {
            return Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) + 1)) + Math.pow(10, length - 1)
        }
    } catch (error) {
        console.error(error);
    }
};

const generateRandomPassword = (length = 8) => {
    try {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digitChars = "0123456789";
        const specialChars = "!@#$%^&*()-_=+";
        let password = "";
        password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        password += digitChars.charAt(Math.floor(Math.random() * digitChars.length));
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * (lowercaseChars + uppercaseChars + digitChars + specialChars).length);
            password += (lowercaseChars + uppercaseChars + digitChars + specialChars).charAt(randomIndex);
        }
        return password;
    } catch (error) {
        console.error(error)
        return null;
    }
};

const slugify = (string, separator = "-") => {
    try {
        return string.trim() ? string.toString().toLowerCase().trim().replace(/\s+/g, separator).replace(/[^\w\-]+/g, "").replace(/\_/g, separator).replace(/\-\-+/g, separator).replace(/\-$/g, "") : ""
    } catch (error) {
        console.error(error)
        return null;
    }
};

const setLocalStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error(`Error setting data in localStorage for key "${key}":`, error);
        return false;
    }
};

const getLocalStorage = (key) => {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error(`Error retrieving data from localStorage for key "${key}":`, error);
        return false;
    }
};

const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error(`Error removing data from localStorage for key "${key}":`, error);
        return false;
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error("Error clearing localStorage:", error);
        return false;
    }
};

const getGreeting = () => {
    try {
        const greetings = {
            morning: "Good morning!",
            afternoon: "Good afternoon!",
            evening: "Good evening!",
        };
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12)
            return greetings.morning;
        else
            if (currentHour >= 12 && currentHour < 17)
                return greetings.afternoon;
            else
                return greetings.evening;
    } catch (error) {
        return null;
    }
};

const validateText = (value, errorMessage = null) => {
    try {
        if (!value?.trim())
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(value?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Invalid input") };
        }
        return { isError: false, errorMessage: "Valid input" };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

const validateEmail = (email, errorMessage = null) => {
    try {
        if (!email?.trim())
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Invalid email") };
        }
        return { isError: false, errorMessage: "Valid email" };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

const validatePassword = (password, errorMessage = null) => {
    try {
        if (!password?.trim())
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,40}$/;
        if (!regex.test(password?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.") };
        }
        return { isError: false, errorMessage: "Valid password" };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

const validateMobileNumber = (value, errorMessage = null) => {
    try {
        if (!value?.trim())
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        const regex = /^\d{10}$/;
        if (!regex.test(value?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Invalid mobile number") };
        }
        return { isError: false, errorMessage: "Valid mobile number" };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};
const CurrencyCode = {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
    INR: 'INR',
    JPY: 'JPY',
    AUD: 'AUD',
    CAD: 'CAD',
    CHF: 'CHF',
    CNY: 'CNY'
};

const formatCurrency = (
    number,
    currencyCode = CurrencyCode.USD,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
) => {
    try {
        if (!number) return null;

        if (!Object.values(CurrencyCode).includes(currencyCode)) {
            console.warn(`Invalid currency code "${currencyCode}". Defaulting to USD.`);
            currencyCode = CurrencyCode.USD;
        }

        return number?.toLocaleString('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits,
            maximumFractionDigits,
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

const removeDuplicatesFromArray = (array) => {
    try {
        return Array.from(new Set(array));
    } catch (error) {
        console.error(error);
        return null;
    }
};

const sortArrayByMode = (array, mode = 'asc', key = null) => {
    try {
        if (!array || array.length === 0)
            return null;

        if (mode !== 'asc' && mode !== 'desc') {
            console.error('Invalid sorting mode. Please use "asc" or "desc".');
            return array;
        }

        return [...array].sort((a, b) => {
            const aValue = key !== null ? a[key] : a;
            const bValue = key !== null ? b[key] : b;

            return mode === 'asc' ? aValue - bValue : bValue - aValue;
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

const reverseString = (str) => {
    try {
        if (!str)
            return null;
        return str?.split('').reverse().join('');
    } catch (error) {
        console.error(error);
        return null;
    }
}

const isObjectValuesEmpty = (object) => {
    const errors = Object.keys(object).reduce((acc, key) => {
        if (!object[key]) {
            acc[key] = key;
        }
        return acc;
    }, {});

    return Object.keys(errors).length > 0;
};

const checkNotNullAndNotEmpty = (value) => {
    try {
        if (value !== undefined && value !== null && value !== "" && value?.toString()?.length !== 0)
            return true;
        else
            return false;
    } catch (error) {
        console.error(error)
        return false;
    }
}

const handleNaN = (value, returnValue = 0) => {
    try {
        if (isNaN(value))
            return returnValue;
        else
            return value;
    } catch (error) {
        console.error(error)
        return returnValue;

    }
}

const isFalsy = (value) => {
    return !value;
}

const isTruthy = (value) => {
    return !!value;
}

const groupBy = (arr, key) => {
    try {
        if (!arr)
            return null;
        if (!key)
            return arr;
        return arr.reduce((acc, obj) => {
            const keyValue = obj[key];
            (acc[keyValue] ??= []).push(obj);
            return acc;
        }, {});
    } catch (error) {
        console.error(error)
        return null;
    }
}

module.exports = {
    capitalizeFirstLetter,
    titleCase,
    getInitials,
    getTruncateDescription,
    compareArrays,
    generateOTPWithLength,
    generateRandomPassword,
    slugify,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
    getGreeting,
    validateText,
    validateEmail,
    validatePassword,
    validateMobileNumber,
    formatCurrency,
    CurrencyCode,
    removeDuplicatesFromArray,
    sortArrayByMode,
    reverseString,
    isObjectValuesEmpty,
    checkNotNullAndNotEmpty,
    handleNaN,
    isFalsy,
    isTruthy,
    groupBy,
};
