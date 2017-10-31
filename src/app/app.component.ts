import { Component }  from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div class="contant-form">
        <simple-form  [metadata]="formMetaData"></simple-form>
      </div>
    </div>
  `,
  providers:  []
})

export class AppComponent {
  formMetaData: any = {};

  constructor() {
    this.formMetaData = {
      title: 'My simple form',
      submitText: 'Save',
      submit: function (value) {
        console.log('callback from app component turgay' + JSON.stringify(value));
      },
      inputs: [
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
        tag: 'textbox',
        id: 'firstName',
        label: 'First name',
        value: 'David',
        required: false,
        order: 1
      },

      {
        tag: 'textbox',
        id: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 7,
        required: true,
      }
    ]};
  }
}
