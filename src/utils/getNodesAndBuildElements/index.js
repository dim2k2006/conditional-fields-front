import flow from 'lodash/flow';
import getConditionalNodes from './modules/getConditionalNodes';
import getReferenceNodeNames from './modules/getReferenceNodeNames';
import getReferenceNodes from './modules/getReferenceNodes';
import buildElements from './modules/buildElements';

/**
 * Builds custom elements on top of default form inputs
 */
const getNodesAndBuildElements = flow(
    getConditionalNodes,
    getReferenceNodeNames,
    getReferenceNodes,
    buildElements
);

export default getNodesAndBuildElements;
