import Element from '../Element';

class Input extends Element {
    constructor(root, rules = []) {
        super(root, rules);
    }

    get value() {
        return this.root.value;
    }
}

export default Input;
