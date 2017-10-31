import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase }                          from '../inputs/input-base';
import { FormBase }                           from '../inputs/form-base';
import { InputDropdown }                      from '../inputs/input-dropdown';
import { InputTextbox }                       from '../inputs/input-textbox';
import { InputTypes }                         from '../inputs/input-types';

@Injectable()
export class FormDataService {

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};

    inputs.forEach(input => {
      group[input.id] = input.required ? new FormControl(input.value || '', Validators.required)
                                              : new FormControl(input.value || '');
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
