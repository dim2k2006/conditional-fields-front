import checkEnvironment from '.';

describe('checkEnvironment', () => {
    test('Should return false.', () => {
        const window = {
            location: {
                href: 'http://ya.ru'
            }
        };

        expect(checkEnvironment(window)).toBe(false);
    });

    test('Should return true.', () => {
        const window = {
            location: {
                href: 'https://dim2k2006.github.io/conditional-fields-demo/'
            }
        };

        expect(checkEnvironment(window)).toBe(true);
    });

    test('Should return true.', () => {
        const window = {
            location: {
                href: 'https://dim2k2006.github.io/conditional-fields-demo/insurance.html'
            }
        };

        expect(checkEnvironment(window)).toBe(true);
    });
});
