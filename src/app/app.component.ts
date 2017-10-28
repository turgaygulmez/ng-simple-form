import { Component }  from '@angular/core';
import { InputTypes } from '../simple-form/inputs/inputs';

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
        inputType: InputTypes.Dropdown,
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
