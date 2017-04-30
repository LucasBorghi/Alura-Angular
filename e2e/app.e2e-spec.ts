import { AlurapicPage } from './app.po';

describe('alurapic App', () => {
  let page: AlurapicPage;

  beforeEach(() => {
    page = new AlurapicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
