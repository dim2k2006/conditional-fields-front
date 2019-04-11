import {JSDOM} from 'jsdom';
import getConditionalNodes from '.';

const attributeName = 'data-rules';

const dom = new JSDOM('<html><body><form><input type="text" data-rules=""><input type="text" data-rules=""></form></body></html>');
const {window} = dom;
const {document} = window;

describe('getConditionalNodes', () => {
    test('Should return correct object.', () => {
        const form = document.querySelector('form');
        const conditionalNodes = [].slice.call(form.querySelectorAll(`[${attributeName}]`)).map((node) => node);

        const props = {
            prop1: 'val1',
            prop2: 'val2',
            form,
            attributeName
        };

        expect(getConditionalNodes(props)).toEqual({
            prop1: 'val1',
            prop2: 'val2',
            form,
            attributeName,
            conditionalNodes
        });
    });
});
