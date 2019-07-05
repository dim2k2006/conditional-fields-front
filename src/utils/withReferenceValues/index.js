import stringToArray from '../stringToArray';

/**
 * Add reference values to rules
 * @param {Array} rules
 * @param {Array} elements
 * @returns {Array}
 */
const withReferenceValues = (rules = [], elements = []) => rules.map((rule) => {
    const [referenceElement] = elements.filter((element) => element.name === rule.name);
    const referenceValue = stringToArray(referenceElement.value);

    return {
        ...rule,
        referenceValue
    };
});

export default withReferenceValues;
