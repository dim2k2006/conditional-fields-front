import attachEvent from '.';

const addEventListener = jest.fn();
const form = {addEventListener};

describe('attachEvent', () => {
    beforeEach(() => {
        addEventListener.mockClear();
    });

    test('Should return function.', () => {
        expect(typeof attachEvent()).toBe('function');
    });

    test('"addEventListener" function should be called.', () => {
        attachEvent(form)();

        expect(addEventListener.mock.calls.length).toBe(1);
    });
});
