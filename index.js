const capitalizeFirstLetter = (str) => {
    if (Boolean(str))
        if (str.trim()?.length > 0)
            return str.charAt(0).toUpperCase() + str.slice(1);
        else
            return "";
    else
        return "";
};

const titleCase = (str, key = null) => {
    if (!str)
        return "";
    const txt = str?.replace(/_/g, " ")?.replace(/([A-Z])/g, "$1")
    const text = txt?.split(' ')
        ?.map(word => word.charAt(0)?.toUpperCase() + word?.slice(1))
        ?.join(' ');
    if (key === "And") {
        return text.replace("And", "&");
    }
    return text;
};

const getInitials = (name) => {
    try {
        if (typeof name === 'string' && name.trim() !== '') {
            const words = name?.trim()?.split(" ")?.map(latter => latter[0].toUpperCase())?.join("");
            if (words?.length > 1)
                return words[0] + words[words?.length - 1];
            return words;
        }
        return "?";
    } catch (error) {
        return "?";
    }
};

const getTruncateDescription = (text, maxLength = 10) => {
    if (!text)
        return "";
    else {
        if (text?.length <= maxLength) {
            return text;
        } else {
            return `${text.substring(0, maxLength)}...`;
        }
    }
};

const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
};

const generateOTPWithLength = (length) => {
    length = Math.max(1, length);
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
};

const slugify = (string, separator = "-") => {
    if (!string.trim()?.length)
        return "";
    return string
        .toString() // Cast to string (optional)
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string (optional)
        .replace(/\s+/g, separator) // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\_/g, separator) // Replace _ with -
        .replace(/\-\-+/g, separator) // Replace multiple - with single -
        .replace(/\-$/g, ""); // Remove trailing -
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
        return null;
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
};

const validateText = (value, errorMessage = null) => {
    if (!value?.trim())
        return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(value?.trim())) {
        return { isError: true, errorMessage: (errorMessage || "Invalid input") };
    }
    return { isError: false, errorMessage: "Valid input" };
};

const validateEmail = (email, errorMessage = null) => {
    if (!email?.trim())
        return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email?.trim())) {
        return { isError: true, errorMessage: (errorMessage || "Invalid email") };
    }
    return { isError: false, errorMessage: "Valid email" };
};

const validatePassword = (password, errorMessage = null) => {
    if (!password?.trim())
        return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,40}$/;
    if (!regex.test(password?.trim())) {
        return { isError: true, errorMessage: (errorMessage || "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.") };
    }
    return { isError: false, errorMessage: "Valid password" };
};

const validateMobileNumber = (value, errorMessage = null) => {
    if (!value?.trim())
        return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
    const regex = /^\d{10}$/;
    if (!regex.test(value?.trim())) {
        return { isError: true, errorMessage: (errorMessage || "Invalid mobile number") };
    }
    return { isError: false, errorMessage: "Valid mobile number" };
};


module.exports = {
    capitalizeFirstLetter,
    titleCase,
    getInitials,
    getTruncateDescription,
    compareArrays,
    generateOTPWithLength,
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
};
