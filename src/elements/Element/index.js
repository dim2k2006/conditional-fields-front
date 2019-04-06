class Element {
    constructor(root, rules = []) {
        this.root = root;
        this.rules = rules;
    }

    get value() {
        return this.root.value;
    }
}

export default Element;
