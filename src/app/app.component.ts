import { Component }  from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div class="contant-form">
        <simple-form  [inputs]="inputs"></simple-form>
      </div>
    </div>
  `,
  providers:  []
})

export class AppComponent {
  inputs: any[];

  constructor() {
    this.inputs = [
       {
        inputType: 'dropdown',
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
        inputType: 'textbox',
        id: 'firstName',
        label: 'First name',
        value: 'David',
        required: false,
        order: 1
      },

      {
        inputType: 'textbox',
        id: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        required: true,
      }
    ];
  }
}
