import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } 				from '@angular/common';
import { SimpleFormComponent }         	from '../form/simple-form.component';
import { SimpleFormInputComponent } 	from '../form-element/simple-form-element.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, BrowserAnimationsModule ],
  declarations: [ SimpleFormComponent, SimpleFormInputComponent ],
  exports: [SimpleFormComponent]
})

export class SimpleFormModule {}
