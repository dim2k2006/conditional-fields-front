import onShow from '.';

const onShowCallback = jest.fn();

describe('onShow', () => {
    beforeEach(() => {
        onShowCallback.mockClear();
    });

    test('Should update root name.', () => {
        const context = {
            name: 'field1',
            root: {},
            config: {
                onShow: onShowCallback
            }
        };

        onShow.call(context);

        expect(context.root.name).toBe(context.name);
    });

    test('"onShowCallback" function should be called.', () => {
        const context = {
            name: 'field1',
            root: {},
            config: {
                onShow: onShowCallback
            }
        };

        onShow.call(context);

        expect(onShowCallback.mock.calls.length).toBe(1);
    });
});
