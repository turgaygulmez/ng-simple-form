import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } 				from '@angular/common';
import { SimpleFormComponent }         	from '../form/simple-form.component';
import { SimpleFormInputComponent } 	from '../form-input/simple-form-input.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ SimpleFormComponent, SimpleFormInputComponent ],
  exports: [SimpleFormComponent]
})

export class SimpleFormModule {}
