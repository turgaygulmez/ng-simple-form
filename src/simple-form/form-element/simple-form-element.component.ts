import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FormControlBase }     	  from '../form-controls/form-control-base';
import { FormControlTypes }       from '../form-controls/form-control-types';
import {
 trigger,
 style,
 animate,
 transition
} from '@angular/animations';

@Component({
  selector: 'df-input',
  templateUrl: './simple-form-element.component.html',
  styleUrls: ['./simple-form-element.component.css'],
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
  @Input() control: FormControlBase<any>;
  @Input() form: FormGroup;
  errorMessage:string = '';

  get isValid() {
  	if (this.form.controls[this.control.id].status === 'VALID') {
  		return true;
  	}

    let formControl = this.form.controls[this.control.id];
  	let errors = formControl.errors;
  	let errorName = Object.keys(errors)[0];
    this.errorMessage = formControl['validations'][errorName] !== undefined ? formControl['validations'][errorName].message :
      'undefined error message';
    return false;
  }
}
