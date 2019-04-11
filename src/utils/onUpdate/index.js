/**
 * Updates element
 * @param {Array} elements
 * @returns {Function}
 */
const onUpdate = (elements = []) => (event = {}) => (element = {}) => element.onUpdate(event, elements);

export default onUpdate;
