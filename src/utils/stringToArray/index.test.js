import stringToArray from '.';

describe('stringToArray', () => {
    test('Should return initial array.', () => {
        expect(stringToArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('Should convert string to array.', () => {
        expect(stringToArray('1')).toEqual(['1']);
    });
});
