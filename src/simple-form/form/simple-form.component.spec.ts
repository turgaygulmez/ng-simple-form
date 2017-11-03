import { TestBed, async, ComponentFixture, tick, fakeAsync }   from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }            from '@angular/forms';
import { SimpleFormElementComponent }     from '../form-element/simple-form-element.component';
import { SimpleFormComponent }     from './simple-form.component';
import { By }              from '@angular/platform-browser';


describe('SimpleFormComponent', () => {
  let fixture: ComponentFixture<SimpleFormComponent>;
  let app: SimpleFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule, ReactiveFormsModule ],
        declarations: [
            SimpleFormElementComponent,
            SimpleFormComponent
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    app = fixture.componentInstance;
    app.metadata = {
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
          value: 'David',
          order: 1
        }]};
  });

  it('should create form based on mocked data', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain(app.metadata.title);
    expect(compiled.querySelector('button').textContent).toContain(app.metadata.submitText);
  }));


  it('should change first form control value on submit', fakeAsync(() => {
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button[type="submit"]').click();
    tick();
    fixture.detectChanges();
    expect(app.metadata.controls[0].value).toBe('Hamsi');
  }));
});
