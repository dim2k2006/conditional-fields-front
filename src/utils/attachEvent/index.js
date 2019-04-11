/**
 * Attaches specific event handler to form and runs it for each element
 * @param {HTMLElement} form
 * @param {Array} elements
 * @param {Function} onUpdate
 * @returns {Function}
 */
const attachEvent = (form = {}, elements = [], onUpdate = (f) => f) => (formEvent = '') => form.addEventListener(formEvent, (event) => elements.forEach(onUpdate(event)));

export default attachEvent;
