import buildElement from '../../../buildElement';
import {elementRules} from '../../../../elements';

/**
 * Build custom elements
 * @param {Object} props
 * @returns {Array}
 */
const buildElements = (props = {}) => {
    const {conditionalNodes = [], referenceNodes = [], config = {}} = props;

    return [...conditionalNodes, ...referenceNodes].map((element) => buildElement(element, elementRules, config));
};

export default buildElements;
