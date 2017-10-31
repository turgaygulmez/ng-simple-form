import { InputBase } from '../inputs/input-base';

export class FormBase {
  title: string;
  inputs: InputBase<any>[];

  constructor(options: {
      title: string,
      inputs: InputBase<any>[]
    }) {
        this.title = options.title || '';
        this.inputs = options.inputs || [];
  }
}
