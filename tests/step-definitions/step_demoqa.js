const { Given, When, Then} = require("@cucumber/cucumber");
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