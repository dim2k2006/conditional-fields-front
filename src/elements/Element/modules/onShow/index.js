/**
 * Shows the element
 */
const onShow = function () {
    this.root.name = this.name;

    this.config.onShow(this.root);
};

export default onShow;
