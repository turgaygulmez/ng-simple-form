import { Component }       from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <simple-form [inputs]="inputs"></simple-form>
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
        id: 'brave',
        label: 'Bravery Rating',
        options: [
          {id: 'solid',  value: 'Solid'},
          {id: 'great',  value: 'Great'},
          {id: 'good',   value: 'Good'},
          {id: 'unproven', value: 'Unproven'}
        ],
        order: 3
      },
      {
        inputType: 'textbox',
        id: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
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
