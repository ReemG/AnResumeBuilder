import { AnResumeBuilderPage } from './app.po';

describe('an-resume-builder App', () => {
  let page: AnResumeBuilderPage;

  beforeEach(() => {
    page = new AnResumeBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
