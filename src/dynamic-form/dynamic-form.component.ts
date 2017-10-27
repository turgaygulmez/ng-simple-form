import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { InputBase }              from './inputs/input-base';
import { InputControlService }    from './services/input-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ InputControlService ]
})

export class DynamicFormComponent implements OnInit {

  @Input() inputs: any[] = [];
  mappedInputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private ics: InputControlService) {  }

  ngOnInit() {
    this.mappedInputs = this.ics.toMappedInputs(this.inputs);
    this.form = this.ics.toFormGroup(this.mappedInputs);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}

