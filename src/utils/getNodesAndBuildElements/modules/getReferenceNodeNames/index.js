import parseRules from '../../../parseRules';

/**
 * Retrieves reference node names ie names of input that are written in data-rules attributes
 * @param {Object} props
 * @returns {Object}
 */
const getReferenceNodeNames = (props = {}) => {
    const {conditionalNodes = [], attributeName = ''} = props;
    const referenceNodeNames = conditionalNodes
        .map((node) => parseRules(node.getAttribute(attributeName)))
        .reduce((accumulator, rules) => {
            const names = rules.map((rule) => rule.name);

            return [...accumulator, ...names];
        }, []);

    return {
        ...props,
        referenceNodeNames
    };
};

export default getReferenceNodeNames;
