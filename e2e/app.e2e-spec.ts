import { WebsiteProjectPage } from './app.po';

describe('website-project App', function() {
  let page: WebsiteProjectPage;

  beforeEach(() => {
    page = new WebsiteProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
