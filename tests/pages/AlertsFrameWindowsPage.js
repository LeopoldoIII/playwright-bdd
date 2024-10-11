class AlertsFrameWindowsPage {
  static alertsFrameWindows = "text=Alerts, Frame & Windows";
  static browserWindowsSelector = "text=Browser Windows";

  static async clickOnAlertsFrameWindows(page) {
    await page.click(AlertsFrameWindowsPage.alertsFrameWindows);
  }

  static async clickOnBrowserWindows(page) {
    await page.click(AlertsFrameWindowsPage.browserWindowsSelector);
  }
}

module.exports = AlertsFrameWindowsPage;