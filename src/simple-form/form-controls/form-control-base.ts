import { FormControlTypes } from '../form-controls/form-control-types';
import { ValidatorFn } from '@angular/forms';

export class FormControlBase<T>{
  value: T;
  id: string;
  label: string;
  order: number;
  tag: FormControlTypes;
  validations: object;

  constructor(options: {
      value?: T,
      id?: string,
      label?: string,
      order?: number,
      tag?: FormControlTypes,
      validations?: object;
    } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.tag = options.tag || FormControlTypes.Input;
    this.validations = options.validations || null;
  }
}
