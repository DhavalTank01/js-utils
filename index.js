const capitalizeFirstLetter = (str) => {
    if (Boolean(str))
        if (str.trim()?.length > 0)
            return str.charAt(0).toUpperCase() + str.slice(1);
        else
            return "";
    else
        return "";
}

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
            const firstName = name.trim().split(" ")[0];
            const firstLetter = firstName[0].toUpperCase();
            return firstLetter;
        }
        return "?";
    } catch (error) {
        return "?";
    }
}

const addEllipsis = (text, maxLength = 10) => {
    if (!text)
        return "";
    else {
        console.log('text?.length <= maxLength :>> ', text?.length, maxLength);
        if (text?.length <= maxLength) {
            return text;
        } else {
            return `${text.substring(0, maxLength)}...`;
        }
    }
}

module.exports = { capitalizeFirstLetter, titleCase, getInitials, addEllipsis };
