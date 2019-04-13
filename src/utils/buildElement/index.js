import 'core-js/modules/es6.array.find';

/**
 * Builds form element
 * @param {HTMLElement} node
 * @param {Array} elementRules
 * @param {Object} config
 * @returns {Object}
 */
const buildElement = (node, elementRules = [], config = {}) => {
    const {Element} = elementRules.find(({check}) => check(node));

    return new Element(node, config);
};

export default buildElement;
