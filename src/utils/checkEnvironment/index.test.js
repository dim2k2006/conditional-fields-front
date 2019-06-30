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
                href: 'https://media-manager-front.herokuapp.com/'
            }
        };

        expect(checkEnvironment(window)).toBe(true);
    });
});
