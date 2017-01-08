import { DailyMoodPage } from './app.po';

describe('daily-mood App', function() {
  let page: DailyMoodPage;

  beforeEach(() => {
    page = new DailyMoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
