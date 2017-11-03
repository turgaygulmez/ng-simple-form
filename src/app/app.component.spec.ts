import { TestBed, async, ComponentFixture }   from '@angular/core/testing';
import { SimpleFormModule } from '../simple-form/core/simple-form.module';
import { FormService }      from './app.service';
import { AppComponent }     from './app.component';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app:AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ SimpleFormModule ],
        declarations: [
            AppComponent
        ],
        providers: [ FormService ]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should initialize metadata', () => {
    expect(app.formMetaData).toBeTruthy();
  });

  it('should not display header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBeFalsy();
  });

  it('should display a form with proper header', () => {
    let formService = fixture.debugElement.injector.get(FormService);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain(formService.getFormData().title);
  });
});
