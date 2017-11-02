import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class FormService {

  getFormData() {
    return {
      title: 'My simple form',
      submitText: 'Save',
      submit: function (form) {
        console.log('callback from app component ' + JSON.stringify(form.value));
      },
      controls: [
        {
          tag: 'input',
          id: 'firstName',
          label: 'First name',
          value: 'David',
          validations: {
            required: {
              message: 'must be filled',
              validate: Validators.required
            }
          },
          order: 1
        },
        {
          tag: 'input',
          id: 'lastName',
          label: 'Last name',
          order: 2
        },
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
          tag: 'textarea',
          id: 'opinion',
          label: 'What do you think about the plug-in?',
          order: 2
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
  }
};
