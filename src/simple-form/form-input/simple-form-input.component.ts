import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { InputBase }     	  from '../inputs/input-base';
import { InputTypes }       from '../inputs/input-types';
import { 
 trigger, 
 style, 
 animate, 
 transition 
} from '@angular/animations'; 

@Component({
  selector: 'df-input',
  templateUrl: './simple-form-input.component.html',
  styleUrls: ['./simple-form-input.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(300, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(300, style({opacity:0})) 
      ])
    ])
  ]
})

export class SimpleFormInputComponent {
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;
  errorMessage:string = '';

  get isValid() {
  	if (this.form.controls[this.input.id].status === 'VALID') {
  		return true;
  	}
    
    let control = this.form.controls[this.input.id];
  	let errors = control.errors;
  	let errorName = Object.keys(errors)[0];
    this.errorMessage = control['validations'][errorName] !== undefined ? control['validations'][errorName].message :
      'undefined error message';
    return false;
  }
}
