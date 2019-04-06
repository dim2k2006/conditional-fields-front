import {elementRules} from './elements';
import buildElement from './utils/buildElement';

class ConditionalForm {
    constructor(form) {
        this.form = form;

        this.init();
    }

    init() {
        if (!this.form) return;

        const elements = [].slice.call(this.form.querySelectorAll('[data-rules]')).map((element) => buildElement(element, elementRules));

        console.log('elements:', elements);
        console.log('init');
    }
}

window.ConditionalForm = ConditionalForm;

export default ConditionalForm;