import checkRules from '../../../../utils/checkRules';
import withReferenceValues from '../../../../utils/withReferenceValues';
import onUpdate from '.';

jest.mock('../../../../utils/checkRules');
jest.mock('../../../../utils/withReferenceValues');

withReferenceValues.mockReturnValue(true);
checkRules.mockReturnValue('onShow');

const onShow = jest.fn();

const event = {
    target: {
        name: 'field1'
    }
};

describe('onUpdate', () => {
    beforeEach(() => {
        onShow.mockClear();
    });

    test('"onShow" function should not be called. Name from event is equal to element name.', () => {
        const context = {
            name: 'field1',
            rules: [1, 2, 3],
            onShow
        };

        onUpdate.call(context, event);

        expect(onShow.mock.calls.length).toBe(0);
    });

    test('"onShow" function should not be called. Element does not has conditional rules.', () => {
        const context = {
            name: 'field2',
            onShow
        };

        onUpdate.call(context, event);

        expect(onShow.mock.calls.length).toBe(0);
    });

    test('"onShow" function should not be called.', () => {
        const context = {
            name: 'field2',
            rules: [1, 2, 3],
            onShow
        };

        onUpdate.call(context, event);

        expect(onShow.mock.calls.length).toBe(1);
    });
});
