import { browser, by, element } from 'protractor';

export class BlocksPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeaderTag() {
    return element(by.css('app-header-section')).getText() as Promise<string>;
  }
}
