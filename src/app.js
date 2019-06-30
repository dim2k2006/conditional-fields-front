import {attributeName, formEvents, onShow, onHide} from './config';
import getNodesAndBuildElements from './utils/getNodesAndBuildElements';
import attachEvent from './utils/attachEvent';
import onUpdate from './utils/onUpdate';

const engine = (isCorrectEnv = true) =>
    class ConditionalFields {
        constructor(form, config = {}) {
            this.form = form;
            this.config = {
                attributeName,
                formEvents,
                onShow,
                onHide,
                ...config
            };

            if (!isCorrectEnv) return;

            this.init();
        }

        init() {
            if (!this.form) return;

            const elements = getNodesAndBuildElements({form: this.form, attributeName, config: this.config});

            formEvents.forEach(attachEvent(this.form, elements, onUpdate(elements)));

            elements.forEach(onUpdate(elements)()); // initial check
        }
    };

export default engine;
