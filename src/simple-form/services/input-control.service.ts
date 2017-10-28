import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from '../inputs/input-base';
import { InputDropdown }          from '../inputs/input-dropdown';
import { InputTextbox }           from '../inputs/input-textbox';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};

    inputs.forEach(input => {
      group[input.id] = input.required ? new FormControl(input.value || '', Validators.required)
                                              : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }

  toMappedInputs(inputs: any[]) {
    let mappedInputs: InputBase<any>[] = [];

    for(let k = 0; k < inputs.length; k++) {
      if (inputs[k].inputType === 'dropdown') {
        mappedInputs.push(new InputDropdown(inputs[k]));
      } else if (inputs[k].inputType === 'textbox') {
        mappedInputs.push(new InputTextbox(inputs[k]));
      }
    }

    return mappedInputs;
  }
}
