/**
 * Checks if value is string and converts it to array
 * @param {String|Array} value
 * @returns {Array}
 */
const stringToArray = (value = '') => {
    const result = (value instanceof Array)
        ? value
        : [`${value}`];

    return result;
};

export default stringToArray;
