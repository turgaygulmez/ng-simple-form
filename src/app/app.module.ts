import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { SimpleFormModule } 			from '../simple-form/core/simple-form.module';
import { FormService }                  from './app.service';
import { AppComponent }                 from './app.component';


@NgModule({
  imports: [ BrowserModule, SimpleFormModule ],
  declarations: [ AppComponent ],
  providers: [ FormService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
