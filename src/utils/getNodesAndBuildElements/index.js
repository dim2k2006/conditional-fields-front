import parseRules from '../parseRules';
import buildElement from '../buildElement';
import {elementRules} from '../../elements';

const getNodeRules = (attributeName) => (node) => parseRules(node.getAttribute(attributeName));

const getRefNames = (accumulator, rules) => {
    const names = rules.map((rule) => rule.name);

    return [...accumulator, ...names];
};

const getNodesAndBuildElements = (props = {}) => {
    const {form, attributeName = '', config = {}} = props;

    const conditionalNodes = [].slice.call(form.querySelectorAll(`[${attributeName}]`)).map((node) => node);
    const referenceNodes = conditionalNodes
        .map(getNodeRules(attributeName))
        .reduce(getRefNames, [])
        .map((name) => form.querySelector(`[name="${name}"]`));

    return [...conditionalNodes, ...referenceNodes].map((element) => buildElement(element, elementRules, config));
};

export default getNodesAndBuildElements;
