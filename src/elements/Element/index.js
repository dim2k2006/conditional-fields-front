import onShow from './modules/onShow';
import onHide from './modules/onHide';
import onReset from './modules/onReset';
import onUpdate from './modules/onUpdate';
import parseRules from '../../utils/parseRules';

/**
 * Creates a new Element class
 */
class Element {
    constructor(root, config = {}) {
        this.root = root;
        this.name = root.name;
        this.config = config;
        this.rules = parseRules(root.getAttribute(this.config.attributeName));
    }

    get value() {
        return this.root.value;
    }
}

Element.prototype.onShow = onShow;
Element.prototype.onHide = onHide;
Element.prototype.onReset = onReset;
Element.prototype.onUpdate = onUpdate;

export default Element;
