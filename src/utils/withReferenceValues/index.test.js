import withReferenceValues from '.';

describe('withReferenceValues', () => {
    test('Should return correct object.', () => {
        const rules = [
            {name: 'field1', value: ['1']},
            {name: 'field2', value: ['2']}
        ];
        const elements = [
            {name: 'field1', value: '11'},
            {name: 'field2', value: '22'}
        ];

        expect(withReferenceValues(rules, elements)).toEqual([
            {name: 'field1', value: ['1'], referenceValue: ['11']},
            {name: 'field2', value: ['2'], referenceValue: ['22']}
        ]);
    });
});
