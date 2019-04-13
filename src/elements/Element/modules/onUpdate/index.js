import checkRules from '../../../../utils/checkRules';
import withReferenceValues from '../../../../utils/withReferenceValues';

/**
 * Updates element visible state
 * @param {Object} event
 * @param {Array} elements
 */
const onUpdate = function (event = {}, elements = []) {
    const {target = {}} = event;
    const {name = ''} = target;

    if (name === this.name) return;

    if (!this.rules) return;

    const method = checkRules(withReferenceValues(this.rules, elements)) ? 'onShow' : 'onHide';

    this[method]();
};

export default onUpdate;
