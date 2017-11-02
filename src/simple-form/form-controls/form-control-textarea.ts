import { FormControlBase }      from './form-control-base';
import { FormControlTypes }     from '../form-controls/form-control-types';

export class FormControlTextarea extends FormControlBase<string> {
  controlType = FormControlTypes.Textarea;
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.rows = options['rows'] || 4;
  }
}
