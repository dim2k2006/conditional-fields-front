/**
 * Retrieves the list of conditional nodes ie nodes that have data-rules attribute
 * @param {Object} props
 * @returns {Object}
 */
const getConditionalNodes = (props = {}) => {
    const {form, attributeName = ''} = props;
    const conditionalNodes = [].slice.call(form.querySelectorAll(`[${attributeName}]`)).map((node) => node);

    return {
        ...props,
        conditionalNodes
    };
};

export default getConditionalNodes;
