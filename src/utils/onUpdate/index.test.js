import onUpdate from '.';

const updateHandler = jest.fn();
const element = {onUpdate: updateHandler};

describe('onUpdate', () => {
    test('Should return function.', () => {
        expect(typeof onUpdate()).toBe('function');
    });

    test('Should return function.', () => {
        expect(typeof onUpdate()()).toBe('function');
    });

    test('"updateHandler" function should be called.', () => {
        onUpdate()()(element);

        expect(updateHandler.mock.calls.length).toBe(1);
    });
});
