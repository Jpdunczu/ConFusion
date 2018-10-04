import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying Ristorante Con Fusion', () => {
    page.navigateTo('/'); // root of Angular application
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    let navlink = page.getAllElements('a')  // get all elements that have the <a> tag.
      .get(1);  // then specify the second element of that, which is the about us link.
    navlink.click();  // click on that link
    expect(page.getParagraphText('h3')).toBe('About Us'); // toBe is Jasmine syntax 
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    let newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    let newComment = page.getElement('textarea');
    newComment.sendKeys('Test comment is the best comment');

    let newSubmitButton = page.getElement('button[type=submit]');
    newSubmitButton.click();

    // protractor method
    browser.pause();
  });
});
