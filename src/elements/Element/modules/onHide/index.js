/**
 * Hides the element
 */
const onHide = function () {
    this.root.name = '';

    this.config.onHide(this.root);

    this.onReset();
};

export default onHide;
