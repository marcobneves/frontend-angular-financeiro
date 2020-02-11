import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.manage().window().maximize();
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  clickCheckBox(selectValue) {
    let checkbox = element(by.id(selectValue));
    return checkbox.click() as Promise<void>
  }
  countItemTable() {
    return element.all(by.css('.table tbody tr'));
  }
}