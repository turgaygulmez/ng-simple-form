import { InputTypes } from '../inputs/input-types';
import { ValidatorFn } from '@angular/forms';

export class InputBase<T>{
  value: T;
  id: string;
  label: string;
  required: boolean;
  order: number;
  controlType: InputTypes;
  validations: object;

  constructor(options: {
      value?: T,
      id?: string,
      label?: string,
      order?: number,
      controlType?: InputTypes,
      validations?: object;
    } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || InputTypes.Textbox;
    this.validations = options.validations || null;
  }
}
