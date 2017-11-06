import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle () {
    return browser.getTitle();
  }

  getValueById (eId) {
    return element(by.id(eId)).getAttribute('value');
  }

  getTextByCss (className) {
    return element(by.css(className)).getText();
  }

  fillValue (eId, value) {
    return element(by.id(eId)).sendKeys(value);
  }
}
