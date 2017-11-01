import { Injectable }                          from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { InputBase }                           from '../inputs/input-base';
import { FormBase }                            from '../inputs/form-base';
import { InputDropdown }                       from '../inputs/input-dropdown';
import { InputTextbox }                        from '../inputs/input-textbox';
import { InputTypes }                          from '../inputs/input-types';

@Injectable()
export class FormDataService {

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};
    let validationArray: ValidatorFn[] = [];
    // extend FormControl with validations property to access custom validation messages
    FormControl.prototype['validations'] = null;

    inputs.forEach(input => {
      if (input.validations !== null) {
        Object.keys(input.validations).forEach(validation => {
          validationArray.push(input.validations[validation].validate);
        });
        group[input.id] = new FormControl(input.value || '', validationArray);
        group[input.id].validations = input.validations;
      } else {
        group[input.id] = new FormControl(input.value || '');
      }
    });

    return new FormGroup(group);
  }

  toFormBase(metadata: any) {
    let mappedInputs: InputBase<any>[] = [];

    for(let k = 0; k < metadata.inputs.length; k++) {
      mappedInputs.push(this.getInput(metadata.inputs[k]));
    }

    metadata.inputs = mappedInputs.sort((a, b) => a.order - b.order);

    return new FormBase(metadata);
  }

  private getInput (input: any) {
      switch (input.tag) {
        case InputTypes.Dropdown:
          return new InputDropdown(input);
        case InputTypes.Textbox:
          return new InputTextbox(input);
      }
  }
}
