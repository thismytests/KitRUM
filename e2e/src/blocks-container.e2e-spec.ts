import { BlocksPage } from './blocks.container';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: BlocksPage;

  beforeEach(() => {
    page = new BlocksPage();
  });

  it('should have header section on the page', () => {
    page.navigateTo();
    expect(page.getHeaderTag()).toBeDefined();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
