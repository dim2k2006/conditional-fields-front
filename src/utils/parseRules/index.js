/**
 * Parse node rules
 * @param {String} data
 * @returns {Array}
 */
const parseRules = (data) => {
    let rules;

    try {
        rules = JSON.parse(data);
    } catch (error) {
        rules = [];
    }

    return rules;
};

export default parseRules;
