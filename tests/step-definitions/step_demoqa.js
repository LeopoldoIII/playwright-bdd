const { Given, When, Then } = require("@cucumber/cucumber");
const AlertsFrameWindowsPage = require("../pages/AlertsFrameWindowsPage");

Given("the user is on the DemoQA home page", async function () {
  await this.page.goto("https://demoqa.com/");
});

When("the user navigates to {string}", async function (menuItem) {
  await AlertsFrameWindowsPage.clickOnAlertsFrameWindows(this.page);
});

Then("the user clicks on Browser Windows", async function () {
  await AlertsFrameWindowsPage.clickOnBrowserWindows(this.page);
});

When("the user clicks on New Tab", async function () {
  await AlertsFrameWindowsPage.clickOnNewTab(this.page);
  this.page = await AlertsFrameWindowsPage.switchToNewTab(this.page);
});

Then('the user shold see the text {string}', async function (expectedText) {
  await AlertsFrameWindowsPage.assertSamplePageText(this.page, expectedText);
});