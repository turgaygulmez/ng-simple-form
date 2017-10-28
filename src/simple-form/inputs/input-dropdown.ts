import { InputBase } from './input-base';

export class InputDropdown extends InputBase<string> {
  controlType = 'dropdown';
  options: {id: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
