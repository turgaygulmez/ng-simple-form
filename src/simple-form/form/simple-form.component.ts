import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormBase }                  from '../form-controls/form-base';
import { FormDataService }           from '../services/form-data.service';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  providers: [ FormDataService]
})

export class SimpleFormComponent implements OnInit {

  @Input() metadata: any = {};
  formBase: FormBase;
  form: FormGroup;

  constructor(private fds: FormDataService) {  }

  ngOnInit() {
    this.formBase = this.fds.toFormBase(this.metadata);
    this.form = this.fds.toFormGroup(this.formBase.controls);
  }

  onSubmit() {
    this.formBase.submit(this.form);
  }
}
