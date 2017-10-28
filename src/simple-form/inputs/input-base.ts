import { InputTypes } from '../inputs/inputs';

export class InputBase<T>{
  value: T;
  id: string;
  label: string;
  required: boolean;
  order: number;
  controlType: InputTypes;

  constructor(options: {
      value?: T,
      id?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: InputTypes
    } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || InputTypes.Textbox;
  }
}
