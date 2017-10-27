import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { DynamicFormModule }            from '../dynamic-form/dynamic-form.module';
import { AppComponent }                 from './app.component';


@NgModule({
  imports: [ BrowserModule, DynamicFormModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
