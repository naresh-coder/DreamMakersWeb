import { DreamMakersWebPage } from './app.po';

describe('dream-makers-web App', function() {
  let page: DreamMakersWebPage;

  beforeEach(() => {
    page = new DreamMakersWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
