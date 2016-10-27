import { DigiTurnoAppPage } from './app.po';

describe('digi-turno-app App', function() {
  let page: DigiTurnoAppPage;

  beforeEach(() => {
    page = new DigiTurnoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
