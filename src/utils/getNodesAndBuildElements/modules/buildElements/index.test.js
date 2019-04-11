import buildElement from '../../../buildElement';
import buildElements from '.';

jest.mock('../../../buildElement');

describe('buildElements', () => {
    beforeEach(() => {
        buildElement.mockClear();
    });

    test('"buildElement" function should be called.', () => {
        const props = {
            conditionalNodes: [1, 2, 3],
            referenceNodes: [1, 2, 3]
        };

        buildElements(props);

        expect(buildElement.mock.calls.length).toBe(6);
    });
});
