import { AutosuggestPage } from './app.po';

describe('autosuggest App', () => {
  let page: AutosuggestPage;

  beforeEach(() => {
    page = new AutosuggestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
