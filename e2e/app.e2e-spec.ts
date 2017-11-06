import { AppPage } from './app.po';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should get correct title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('MyApp');
  });

  it('should set default value for firstName', () => {
    page.navigateTo();
    expect(page.getValueById('firstName')).toEqual('David');
  });

  it('should display first validation error for mail', () => {
    page.navigateTo();
    expect(page.getTextByCss('.alert-danger')).toEqual('Email must be filled');
  });

  it('should display second validation error for mail', () => {
    page.navigateTo();
    page.fillValue('emailAddress', 'abc');
    expect(page.getTextByCss('.alert-danger')).toEqual('Email not a valid mail address');
  });
});
