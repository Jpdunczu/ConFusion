import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector)); // returns the actual element
  }

  getAllElements(selector: string) {
    // get all elements and return them to the caller.
    return element.all(by.css(selector)); 
  }
}
