import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase }                          from '../inputs/input-base';
import { InputDropdown }                      from '../inputs/input-dropdown';
import { InputTextbox }                       from '../inputs/input-textbox';
import { InputTypes }                         from '../inputs/input-types';

@Injectable()
export class InputControlService {

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
      switch(inputs[k].inputType) {
        case InputTypes.Dropdown:
          mappedInputs.push(new InputDropdown(inputs[k]));
          break;
        case InputTypes.Textbox:
          mappedInputs.push(new InputTextbox(inputs[k]));
          break;
      }
    }

    return mappedInputs.sort((a, b) => a.order - b.order);
  }
}
