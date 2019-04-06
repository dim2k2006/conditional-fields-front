import Element from '../Element';

class Checkbox extends Element {
    constructor(root, rules = []) {
        super(root, rules);
    }

    get value() {
        return `${this.root.checked}`;
    }
}

export default Checkbox;
