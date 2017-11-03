import { TestBed, async, ComponentFixture }   from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }            from '@angular/forms';
import { SimpleFormElementComponent }     from './simple-form-element.component';
import { FormDataService }           from '../services/form-data.service';


describe('SimpleFormElementComponent', () => {
  let fixture: ComponentFixture<SimpleFormElementComponent>;
  let app: SimpleFormElementComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, ReactiveFormsModule ],
        declarations: [
            SimpleFormElementComponent
        ],
        providers: [FormDataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormElementComponent);
    app = fixture.componentInstance;

    let metadata = {
      title: 'My another form',
      submitText: 'Save',
      submit: function (form) {
        this.controls[0].value = "Hamsi";
      },
      controls: [
        {
          tag: 'input',
          id: 'firstName',
          label: 'First name',
          value: 'Hamsi',
          type: 'email',
          order: 1
        }]};

    let formDataService = TestBed.get(FormDataService);
    let formBase = formDataService.toFormBase(metadata);
    let form = formDataService.toFormGroup(formBase.controls);
    app.form = form;
    app.control = formBase.controls[0];
    fixture.detectChanges();
  });

  it('should create proper form element', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('input').value).toContain('Hamsi');
    expect(compiled.querySelector('input').type).toContain('email');
  }));
});
