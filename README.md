# Conditional fields

«Conditional fields» is a JavaScript library that allows you to show or hide form fields based on user selections.

This gives you the opportunity to flexibly customize your HTML forms and to request only needed information from users.

## Advantages

* compatibility with any CMS
* simple integration
* easy to use
* pure JavaScript without external dependencies
* 2.4 KB gzipped size

## Install

```
npm i conditional-fields
```

## Setup

You can choose between:

1. Classic web

```html
<script src="conditional-fields.browser.js"></script>
```

2. ES6 Modules

```javascript
import ConditionalFields from 'conditional-fields';
```

## Usage

First of all, you will need an HTML form.

To enable conditional logic you should add **data-rules** attribute to the conditional field.

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
new ConditionalFields(document.querySelector('form'));
```

In the example above input with name **phone** will be visible only if input with name **is_adult** has value that equals to **true**.


You can also add several values:

```html
<form action="#" method="POST">
    <div class="row">
        <input type="text" name="strange_thing" placeholder="Type something">
    </div>

    <div class="row">
        <input name="alert" data-rules='[{"name": "strange_thing", "value": ["floppy", "disk", "floppy disk"]}]'>
    </div>

    <button type="submit">Submit</button>
</form>
```

In the example above input with name **alert** will be visible only if input with name **strange_thing** has the value that equals to **floppy** or **disk** or **floppy disk**.

Or even several rules:

```html
<form action="#" method="POST">
    <div class="row">
        <input type="checkbox" name="is_adult"> Are you an adult?
    </div>

    <div class="row">
        <input type="checkbox" name="is_agreed"> Do you agree with the terms?
    </div>

    <div class="row">
        <input name="phone" data-rules='[{"name": "is_adult", "value": ["true"]}, {"name": "is_agreed", "value": ["true"]}]'>
    </div>

    <button type="submit">Submit</button>
</form>
```

In the example above input with name **phone** will be visible only if input with name **is_adult** has value that equals to **true** and input with name **is_agreed** has value that equals to **true**.


You can also provide your own functions to show and hide form fields:

```javascript
new ConditionalFields(document.querySelector('form'), {
    onShow: (root) => root.closest('div.row').style.display = 'block',
    onHide: (root) => root.closest('div.row').style.display = 'none'
});
```

Where **root** it is a conditional field HTML node.

## Restrictions

Right now this library allows using only default form fields but in the future, there will be an option where you can define your own custom elements and make conditional not only form elements but any type of HTML element.
