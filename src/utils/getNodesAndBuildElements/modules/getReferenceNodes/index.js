/**
 * Retrieves reference nodes
 * @param {Object} props
 * @returns {Object}
 */
const getReferenceNodes = (props = {}) => {
    const {form, referenceNodeNames = []} = props;
    const referenceNodes = referenceNodeNames.map((name) => form.querySelector(`[name="${name}"]`));

    return {
        ...props,
        referenceNodes
    };
};

export default getReferenceNodes;
