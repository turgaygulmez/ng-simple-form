import { InputBase } from './input-base';
import { InputTypes }	from '../inputs/inputs';

export class InputTextbox extends InputBase<string> {
  controlType = InputTypes.Textbox;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
