import { Component }  from '@angular/core';
import { FormService } from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div class="col-sm-6 col-sm-offset-3">
        <simple-form  [metadata]="formMetaData"></simple-form>
      </div>
    </div>
  `,
  providers:  []
})

export class AppComponent {
  formMetaData: any = {};

  constructor(private formService:FormService) {
    this.formMetaData = formService.getFormData();
  }
}
