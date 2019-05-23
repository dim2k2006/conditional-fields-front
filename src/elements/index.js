import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';

export const elementRules = [
    {
        Element: Input,
        check: (node) => node.tagName === 'INPUT' && node.type !== 'radio' && node.type !== 'checkbox'
    },
    {
        Element: Textarea,
        check: (node) => node.tagName === 'TEXTAREA'
    },
    {
        Element: Checkbox,
        check: (node) => node.tagName === 'INPUT' && node.type === 'checkbox'
    },
    {
        Element: Radio,
        check: (node) => node.tagName === 'INPUT' && node.type === 'radio'
    },
    {
        Element: Select,
        check: (node) => node.tagName === 'SELECT'
    }
];

export default [Input, Checkbox];
