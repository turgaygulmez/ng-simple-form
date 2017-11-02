import { FormControlBase }    from './form-control-base';
import { FormControlTypes }	from '../form-controls/form-control-types';

export class FormControlInput extends FormControlBase<string> {
  controlType = FormControlTypes.Input;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
