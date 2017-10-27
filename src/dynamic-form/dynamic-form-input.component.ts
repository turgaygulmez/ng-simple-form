import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { InputBase }     from './inputs/input-base';

@Component({
  selector: 'df-input',
  templateUrl: './dynamic-form-input.component.html'
})
export class DynamicFormInputComponent {
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.input.id].valid;
  }
}
