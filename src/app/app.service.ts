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
        tag: 'dropdown',
        id: 'departments',
        label: 'Departments',
        options: [
          {id: 'dept-1', value: 'HR'},
          {id: 'dept-2', value: 'IT'},
          {id: 'dept-3', value: 'Sales'},
          {id: 'dept-4', value: 'Service'}
        ],
        order: 3
      },
      {
        tag: 'input',
        id: 'firstName',
        label: 'First name',
        value: 'David',
        order: 1
      },
      {
        tag: 'textarea',
        id: 'comment',
        label: 'Your comment',
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
          minlength: {
            message: 'must be 4 chars',
            validate: Validators.minLength(4)
          }
        }
      }
    ]};
  }
};
