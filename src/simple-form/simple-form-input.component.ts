import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { InputBase }     	from './inputs/input-base';
import { InputTypes }       from './inputs/inputs';

@Component({
  selector: 'df-input',
  templateUrl: './simple-form-input.component.html'
})
export class SimpleFormInputComponent {
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.input.id].valid;
  }
}
