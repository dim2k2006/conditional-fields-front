/**
 * Builds form element
 * @param {HTMLElement} node
 * @param {Array} elementRules
 * @param {Object} config
 * @returns {Object}
 */
const buildElement = (node, elementRules = [], config = {}) => {
    const [data] = elementRules.filter(({check}) => check(node));
    const {Element} = data;

    return new Element(node, config);
};

export default buildElement;
