import onHide from '.';

const onHideHandler = jest.fn();
const onReset = jest.fn();

describe('onHide', () => {
    beforeEach(() => {
        onHideHandler.mockClear();
        onReset.mockClear();
    });

    test('Should reset element name.', () => {
        const context = {
            root: {
                name: 'some_name'
            },
            config: {
                onHide: onHideHandler
            },
            onReset
        };

        onHide.call(context);

        expect(context.root.name).toBe('');
    });

    test('"onHideHandler" function should be called.', () => {
        const context = {
            root: {
                name: 'some_name'
            },
            config: {
                onHide: onHideHandler
            },
            onReset
        };

        onHide.call(context);

        expect(onHideHandler.mock.calls.length).toBe(1);
    });

    test('"onReset" function should be called.', () => {
        const context = {
            root: {
                name: 'some_name'
            },
            config: {
                onHide: onHideHandler
            },
            onReset
        };

        onHide.call(context);

        expect(onReset.mock.calls.length).toBe(1);
    });
});
