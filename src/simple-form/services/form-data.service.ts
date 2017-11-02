import { Injectable }                          from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormControlBase }                     from '../form-controls/form-control-base';
import { FormBase }                            from '../form-controls/form-base';
import { FormControlDropdown }                 from '../form-controls/form-control-dropdown';
import { FormControlInput }                  from '../form-controls/form-control-input';
import { FormControlTextarea }                 from '../form-controls/form-control-textarea';
import { FormControlTypes }                    from '../form-controls/form-control-types';

@Injectable()
export class FormDataService {

  toFormGroup(controls: FormControlBase<any>[] ) {
    let group: any = {};
    let validationArray: ValidatorFn[] = [];
    // extend FormControl with validations property to access custom validation messages
    FormControl.prototype['validations'] = null;

    controls.forEach(control => {
      if (control.validations !== null) {
        Object.keys(control.validations).forEach(validation => {
          validationArray.push(control.validations[validation].validate);
        });
        group[control.id] = new FormControl(control.value || '', validationArray);
        group[control.id].validations = control.validations;
      } else {
        group[control.id] = new FormControl(control.value || '');
      }
    });

    return new FormGroup(group);
  }

  toFormBase(metadata: any) {
    let mappedControls: FormControlBase<any>[] = [];

    for(let k = 0; k < metadata.controls.length; k++) {
      mappedControls.push(this.getControl(metadata.controls[k]));
    }

    metadata.controls = mappedControls.sort((a, b) => a.order - b.order);

    return new FormBase(metadata);
  }

  private getControl (control: any) {
      switch (control.tag) {
        case FormControlTypes.Dropdown:
          return new FormControlDropdown(control);
        case FormControlTypes.Input:
          return new FormControlInput(control);
        case FormControlTypes.Textarea:
          return new FormControlTextarea(control);
      }
  }
}
