import {attributeName, formEvents, onShow, onHide} from './config';
import getNodesAndBuildElements from './utils/getNodesAndBuildElements';
import attachEvent from './utils/attachEvent';
import onUpdate from './utils/onUpdate';

/**
 * Creates a new ConditionalForm class
 */
class ConditionalForm {
    constructor(form, config = {}) {
        this.form = form;
        this.config = {
            attributeName,
            formEvents,
            onShow,
            onHide,
            ...config
        };

        this.init();
    }

    init() {
        if (!this.form) return;

        const elements = getNodesAndBuildElements({form: this.form, attributeName, config: this.config});

        formEvents.forEach(attachEvent(this.form, elements, onUpdate(elements)));

        elements.forEach(onUpdate(elements)()); // initial check
    }
}

window.ConditionalForm = ConditionalForm;

export default ConditionalForm;