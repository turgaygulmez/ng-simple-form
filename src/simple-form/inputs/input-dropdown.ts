import { InputBase } 	from './input-base';
import { InputTypes }	from '../inputs/input-types';

export class InputDropdown extends InputBase<string> {
  controlType = InputTypes.Dropdown;
  options: {id: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
