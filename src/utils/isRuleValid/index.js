/**
 * Checks if rule value is valid to reference value
 * @param {Array} value
 * @param {Array} referenceValue
 * @returns {Boolean}
 */
const isRuleValid = (value = [], referenceValue = []) => {
    /**
     * Сomparison of "any" value.
     * If value from component conditions rule equals to empty array (it means "any" value)
     * And value from related form element equals to NOT empty array
     * Than return true
     */
    if (!value.length && referenceValue.length) return true;

    /**
     * Strict comparison of values.
     * If some value from related form element is in component conditions rule value (values are arrays)
     * Than return true
     * In other case return false
     */
    return value.some((val) => referenceValue.indexOf(val) !== -1);
};

export default isRuleValid;
