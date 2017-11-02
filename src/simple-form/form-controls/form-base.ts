import { FormControlBase } from '../form-controls/form-control-base';

export class FormBase {
  title: string;
  controls: FormControlBase<any>[];
  submitText: string;
  submit: Function;

  constructor(options: {
      title: string,
      controls: FormControlBase<any>[],
      submitText: string,
      submit: Function
    }) {
        this.title = options.title || '';
        this.controls = options.controls || [];
        this.submitText = options.submitText || '';
        this.submit = options.submit || function () {
            console.error('no submit callback defined');
        };
  }
}
