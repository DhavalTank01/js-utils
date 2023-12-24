/**
 * Capitalizes a string
 * @example capitalizeFirstLetter('string') // 'String'
 * @param str string to capitalize
 * @returns capitalized string
 */
const capitalizeFirstLetter = (str) => {
    if (Boolean(str))
        if (str.trim()?.length > 0)
            return str.charAt(0).toUpperCase() + str.slice(1);
        else
            return "";
    else
        return "";
}

module.exports = { capitalizeFirstLetter };
