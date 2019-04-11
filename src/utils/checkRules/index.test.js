import isRuleValid from '../isRuleValid';
import checkRules from '.';

jest.mock('../isRuleValid');

describe('checkRules', () => {
    beforeEach(() => {
        isRuleValid.mockClear();
    });

    test('Should return true.', () => {
        expect(checkRules()).toBe(true);
    });

    test('Should return false.', () => {
        isRuleValid.mockReturnValue(false);

        const rules = [
            {value: [1], referenceValue: [2]}
        ];

        expect(checkRules(rules)).toBe(false);
    });

    test('Should return true.', () => {
        isRuleValid.mockReturnValue(true);

        const rules = [
            {value: [1], referenceValue: [1]},
            {value: [2], referenceValue: [2]}
        ];

        expect(checkRules(rules)).toBe(true);
    });
});
