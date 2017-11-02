import { FormControlBase } 	from './form-control-base';
import { FormControlTypes }	from '../form-controls/form-control-types';

export class FormControlDropdown extends FormControlBase<string> {
  controlType = FormControlTypes.Dropdown;
  options: {id: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
