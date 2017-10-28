import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SimpleFormComponent }         from './simple-form.component';
import { SimpleFormInputComponent } from './simple-form-input.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ SimpleFormComponent, SimpleFormInputComponent ],
  exports: [SimpleFormComponent]
})
export class SimpleFormModule {}
