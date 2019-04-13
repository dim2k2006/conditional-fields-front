import 'core-js/modules/es6.array.find';
import stringToArray from '../stringToArray';

/**
 * Add reference values to rules
 * @param {Array} rules
 * @param {Array} elements
 * @returns {Array}
 */
const withReferenceValues = (rules = [], elements = []) => rules.map((rule) => {
    const referenceElement = elements.find((element) => element.name === rule.name);
    const referenceValue = stringToArray(referenceElement.value);

    return {
        ...rule,
        referenceValue
    };
});

export default withReferenceValues;