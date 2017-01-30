import { ActionConnectionPage } from './app.po';

describe('action-connection App', function() {
  let page: ActionConnectionPage;

  beforeEach(() => {
    page = new ActionConnectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
