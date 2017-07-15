import { WheretoeatPage } from './app.po';

describe('wheretoeat App', () => {
  let page: WheretoeatPage;

  beforeEach(() => {
    page = new WheretoeatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
