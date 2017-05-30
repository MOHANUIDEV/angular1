import { WorkspotPage } from './app.po';

describe('workspot App', () => {
  let page: WorkspotPage;

  beforeEach(() => {
    page = new WorkspotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
