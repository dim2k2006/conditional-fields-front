# Conditional fields

«Conditional fields» it is a JavaScript library that allows you to show or hide form fields based on user selections. 

This gives you the opportunity to flexibly customize your HTML forms and to request only needed information from users.

## Advantages

* compatibility with any CMS
* 2.4 KB gzipped size

## Setup

You can choose between:

1. Classic web with <script> tag

```html
<script src="conditional-fields.browser.js"></script>
```

2. ES6 Modules

```javascript
import ConditionalFields from 'conditional-fields';
```

## Usage

First of all, you will need an html form.

To enable conditional logic you should add data-rules attribute to conditional field.

```html
<form action="#" method="POST">
    <div class="row">
        <input type="checkbox" name="is_adult"> Are you an adult?
    </div>
    
    <div class="row">
        <input name="phone" data-rules='[{"name": "is_adult", "value": ["true"]}]'>
    </div>
    
    <button type="submit">Submit</button>
</form>
```

```javascript
new ConditionalForm(document.querySelector('form'));
```

In this case input with name **phone** will be visible only if input with name **is_adult** has value that equals to **true**.






You can also provide your own functions to show and hide form fields:

```javascript
new ConditionalForm(document.querySelector('form'), {
    onShow: (root) => root.closest('div.row').style.display = 'block',
    onHide: (root) => root.closest('div.row').style.display = 'none'
});
```
