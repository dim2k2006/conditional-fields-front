import {JSDOM} from 'jsdom';
import getReferenceNodes from '.';

const dom = new JSDOM('<html><body><form><input type="text" name="field1"><input type="text" name="field2"></form></body></html>');
const {window} = dom;
const {document} = window;

describe('getReferenceNodes', () => {
    test('Should return correct object.', () => {
        const form = document.querySelector('form');
        const referenceNodeNames = ['field1', 'field2'];
        const referenceNodes = referenceNodeNames.map((name) => form.querySelector(`[name="${name}"]`));

        const props = {
            prop1: 'val1',
            prop2: 'val2',
            form,
            referenceNodeNames
        };

        expect(getReferenceNodes(props)).toEqual({
            prop1: 'val1',
            prop2: 'val2',
            form,
            referenceNodeNames,
            referenceNodes
        });
    });
});
