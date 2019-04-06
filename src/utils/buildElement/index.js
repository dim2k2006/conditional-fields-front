import 'core-js/modules/es6.array.find';

/**
 * Builds form element
 * @param {HTMLElement} node
 * @param {Array} elementRules
 * @returns {Object}
 */
const buildElement = (node, elementRules) => {
    const {Element} = elementRules.find(({check}) => check(node));

    return new Element(node);
};

export default buildElement;
