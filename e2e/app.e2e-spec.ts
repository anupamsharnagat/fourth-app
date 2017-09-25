import { MyFourthAppPage } from './app.po';

describe('my-fourth-app App', () => {
  let page: MyFourthAppPage;

  beforeEach(() => {
    page = new MyFourthAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
