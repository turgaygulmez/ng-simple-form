ng-simple-form
===========================

> ng-simple-form is a module to create dynamic form with an easy steps.

Languages / Frameworks:
-------------------
* TypeScript
* Angular 4

Prerequisites
-----------
* Install latest nodejs https://nodejs.org/en/download/
* Install all dependencies npm install

Create your project
-------------------
* Fork or clone this repository:
`https://github.com/turgaygulmez/ng-simple-form.git`.
* Install dependencies: `npm install`.
* Update package.json with your data.

Development
-----------
* Run: `ng serve --open`.

Module meta-data
-----------

```ts
{
  title: 'My simple form',
  submitText: 'Save',
  submit: function (form) {
    console.log('callback from app component ' + JSON.stringify(form.value));
  },
  controls: [
    {
      tag: 'dropdown',
      id: 'source',
      label: 'How did you find us?',
      options: [
        {id: 'src-internet', value: 'Internet'},
        {id: 'src-newspaper', value: 'Newspaper'},
        {id: 'src-friend', value: 'Friend'}
      ],
      order: 3
    },
    {
      tag: 'input',
      id: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 4,
      validations: {
        required: {
          message: 'must be filled',
          validate: Validators.required
        },
        email: {
          message: 'not a valid mail address',
          validate: Validators.email
        }
      }
    }
  ]
};
```
| Property                  | Description                                               |
| --------------------------| ----------------------------------------------------------|
| title                     | Title of the form with h2 tag                           |
| submitText                | submit button text                                        |
| submit                    | submit callback function                                  |
| controls                  | list of controller will be shown in the form              |
| controls[0].tag           | form controller type (dropdown, input, textarea)          |
| controls[0].value         | default value of the form controller                      |
| controls[0].id            | form controller id                                        |
| controls[0].label         | form controller label for description                     |
| controls[0].type          | input tag type                                            |
| controls[0].order         | form controller order in the form                         |
| controls[0].options       | list of options for select tag ({id, value})              |
| controls[0].validations   | list of validations (ex: min, max, required, email etc.)  |


Licence
-------
The MIT License (MIT)

Copyright (c) 2017 Turgay Gulmez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
