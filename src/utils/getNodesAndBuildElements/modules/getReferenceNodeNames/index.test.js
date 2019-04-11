import parseRules from '../../../parseRules';
import getReferenceNodeNames from '.';

jest.mock('../../../parseRules');

parseRules.mockReturnValue([{name: 'fieldName'}]);

const getAttribute = jest.fn();
const conditionalNode = {getAttribute};

describe('getReferenceNodeNames', () => {
    beforeEach(() => {
        parseRules.mockClear();
    });

    test('Should return correct object.', () => {
        const props = {
            prop1: 'val1',
            prop2: 'val2',
            conditionalNodes: [conditionalNode, conditionalNode, conditionalNode]
        };

        expect(getReferenceNodeNames(props)).toEqual({
            prop1: 'val1',
            prop2: 'val2',
            conditionalNodes: [conditionalNode, conditionalNode, conditionalNode],
            referenceNodeNames: ['fieldName', 'fieldName', 'fieldName']
        });
    });
});
