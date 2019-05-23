import Element from '../Element';

class Radio extends Element {
    constructor(root, rules = []) {
        super(root, rules);
    }

    get value() {
        const input = document.querySelector(`input[name="${this.name}"]:checked`);

        if (!input) return undefined;

        return input.value;
    }

    onReset() {
        this.root.checked = false;
    }
}

export default Radio;
