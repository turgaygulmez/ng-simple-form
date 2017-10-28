import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { SimpleFormModule }            from '../simple-form/simple-form.module';
import { AppComponent }                 from './app.component';


@NgModule({
  imports: [ BrowserModule, SimpleFormModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
