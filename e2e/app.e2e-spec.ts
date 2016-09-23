import { KudosPage } from './app.po';

describe('kudos App', function() {
  let page: KudosPage;

  beforeEach(() => {
    page = new KudosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
