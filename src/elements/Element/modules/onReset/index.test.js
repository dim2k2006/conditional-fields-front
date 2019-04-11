import onReset from '.';

describe('onReset', () => {
    test('Should reset root value.', () => {
        const context = {
            root: {
                value: 'some value'
            }
        };

        onReset.call(context);

        expect(context.root.value).toBe('');
    });
});
