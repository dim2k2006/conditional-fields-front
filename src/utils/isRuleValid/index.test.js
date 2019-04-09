import isRuleValid from '.';

describe('isRuleValid', () => {
    test('Should return true. (comparison of "any" value).', () => {
        expect(isRuleValid([], ['some_value'])).toBe(true);
    });

    test('Should return false. (strict comparison of values).', () => {
        expect(isRuleValid(['2'], ['5'])).toBe(false);
    });

    test('Should return true. (strict comparison of values).', () => {
        expect(isRuleValid(['2'], ['2'])).toBe(true);
    });

    test('Should return true. (strict comparison of values).', () => {
        expect(isRuleValid(['2', '5'], ['2'])).toBe(true);
    });
});