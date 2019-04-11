import isRuleValid from '../isRuleValid';

/**
 * Checks element conditional rules
 * @param {Array} rules
 * @returns {Boolean}
 */
const checkRules = (rules = []) => {
    if (!rules.length) return true;

    const [rule] = rules;
    const {value = [], referenceValue = []} = rule;

    if (!isRuleValid(value, referenceValue)) return false;

    return checkRules(rules.slice(1));
};

export default checkRules;
