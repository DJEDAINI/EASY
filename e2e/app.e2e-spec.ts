import { AuthenGooglePage } from './app.po';

describe('authen-google App', function() {
  let page: AuthenGooglePage;

  beforeEach(() => {
    page = new AuthenGooglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
