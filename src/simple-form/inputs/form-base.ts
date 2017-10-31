import { InputBase } from '../inputs/input-base';

export class FormBase {
  title: string;
  inputs: InputBase<any>[];
  submitText: string;
  submit: Function;

  constructor(options: {
      title: string,
      inputs: InputBase<any>[],
      submitText: string,
      submit: Function
    }) {
        this.title = options.title || '';
        this.inputs = options.inputs || [];
        this.submitText = options.submitText || '';
        this.submit = options.submit || function () {
            console.error('no submit callback defined');
        };
  }
}
