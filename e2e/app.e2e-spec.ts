import { Ng2MarkdownPreviewerPage } from './app.po';

describe('ng2-markdown-previewer App', () => {
  let page: Ng2MarkdownPreviewerPage;

  beforeEach(() => {
    page = new Ng2MarkdownPreviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
