import parseRules from '.';

describe('parseRules', () => {
    test('Should return [].', () => {
        expect(parseRules()).toEqual([]);
    });

    test('Should return correct rules.', () => {
        const rules = [
            {name: 'field1', value: ['1']},
            {name: 'field2', value: ['2']}
        ];

        expect(parseRules(JSON.stringify(rules))).toEqual(rules);
    });
});
