import Input from './Input';
import Checkbox from './Checkbox';

export const elementRules = [
    {
        Element: Input,
        check: (node) => node.tagName === 'INPUT' && node.type !== 'radio' && node.type !== 'checkbox'
    },
    {
        Element: Checkbox,
        check: (node) => node.tagName === 'INPUT' && node.type === 'checkbox'
    }
];

export default [Input, Checkbox];
