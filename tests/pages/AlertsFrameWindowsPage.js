class AlertsFrameWindowsPage {
  static alertsFrameWindows = "text=Alerts, Frame & Windows";
  static browserWindowsSelector = "text=Browser Windows";
  static newTabSelector = "text=New Tab";
  static samplePageTextSelector = '#sampleHeading'; 

  static async clickOnAlertsFrameWindows(page) {
    await page.click(AlertsFrameWindowsPage.alertsFrameWindows);
  }

  static async clickOnBrowserWindows(page) {
    await page.click(AlertsFrameWindowsPage.browserWindowsSelector);
  }

  static async clickOnNewTab(page) {
    await page.click(AlertsFrameWindowsPage.newTabSelector);
  }

  static async assertSamplePageText(page, expectedText) {
    const actualText = await page.textContent(
      AlertsFrameWindowsPage.samplePageTextSelector
    );
    if (actualText.trim() !== expectedText) {
      throw new Error(`Expected text to be "${expectedText}", but got "${actualText.trim()}"`)
    }
  }

  static async switchToNewTab(page) {
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'), 
      page.click(AlertsFrameWindowsPage.newTabSelector)  
    ]);
    await newPage.waitForLoadState(); 
    return newPage;
  }
}
module.exports = AlertsFrameWindowsPage;